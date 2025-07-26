#!/bin/bash

# Get AWS Account ID and Region
export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
export AWS_REGION="eu-central-1"
export PROJECT_NAME="web-demo"
export IMAGE_TAG="backend-$(date +%s)" # Unique tag with a timestamp

# ECR Repository URI for the backend
export REPO_URI="${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${PROJECT_NAME}-web"

# Authenticate Docker with ECR
echo "--- Logging in to ECR ---"
aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${REPO_URI}

# Build and push the Docker image with a unique tag
echo "--- Building and pushing Docker image with tag: ${IMAGE_TAG} ---"
cd node
docker buildx build --platform linux/amd64 -t ${REPO_URI}:${IMAGE_TAG} --push .
cd ..

# Get the current task definition
echo "--- Creating new task definition revision ---"
TASK_DEFINITION_ARN=$(aws ecs describe-services --cluster "${PROJECT_NAME}-cluster" --services "${PROJECT_NAME}-backend" --query "services[0].taskDefinition" --output text --region "${AWS_REGION}")
TASK_DEFINITION_JSON=$(aws ecs describe-task-definition --task-definition "${TASK_DEFINITION_ARN}" --region "${AWS_REGION}")
CONTAINER_DEFINITIONS=$(echo $TASK_DEFINITION_JSON | jq '.taskDefinition.containerDefinitions')
NEW_CONTAINER_DEFINITIONS=$(echo $CONTAINER_DEFINITIONS | jq --arg IMAGE_URI "${REPO_URI}:${IMAGE_TAG}" '.[0].image = $IMAGE_URI')

# Register a new task definition revision with the updated image
NEW_TASK_DEF_ARN=$(aws ecs register-task-definition \
  --region "${AWS_REGION}" \
  --family "$(echo $TASK_DEFINITION_JSON | jq -r .taskDefinition.family)" \
  --volumes "$(echo $TASK_DEFINITION_JSON | jq -c .taskDefinition.volumes)" \
  --network-mode "$(echo $TASK_DEFINITION_JSON | jq -r .taskDefinition.networkMode)" \
  --requires-compatibilities "$(echo $TASK_DEFINITION_JSON | jq -c .taskDefinition.requiresCompatibilities)" \
  --cpu "$(echo $TASK_DEFINITION_JSON | jq -r .taskDefinition.cpu)" \
  --memory "$(echo $TASK_DEFINITION_JSON | jq -r .taskDefinition.memory)" \
  --execution-role-arn "$(echo $TASK_DEFINITION_JSON | jq -r .taskDefinition.executionRoleArn)" \
  --task-role-arn "$(echo $TASK_DEFINITION_JSON | jq -r .taskDefinition.taskRoleArn)" \
  --container-definitions "${NEW_CONTAINER_DEFINITIONS}" \
  --query "taskDefinition.taskDefinitionArn" --output text)

# Update the ECS service to use the new task definition
echo "--- Updating ECS service with new task definition: ${NEW_TASK_DEF_ARN} ---"
aws ecs update-service \
  --cluster "${PROJECT_NAME}-cluster" \
  --service "${PROJECT_NAME}-backend" \
  --task-definition "${NEW_TASK_DEF_ARN}" \
  --force-new-deployment \
  --region ${AWS_REGION}

echo "--- Deployment successfully updated ---"

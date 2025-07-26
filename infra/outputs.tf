output "vpc_id" {
  description = "VPC ID"
  value       = module.vpc.vpc_id
}

output "ecs_cluster_name" {
  description = "ECS Cluster name"
  value       = aws_ecs_cluster.main.name
}

output "ecr_repository_url" {
  description = "ECR repository URL"
  value       = aws_ecr_repository.web.repository_url
}

output "rds_endpoint" {
  description = "RDS endpoint"
  value       = module.db.db_instance_endpoint
}

output "alb_dns_name" {
  description = "DNS name of the ALB"
  value       = module.alb.dns_name
}

output "frontend_service_name" {
  description = "ECS Frontend service name"
  value       = aws_ecs_service.frontend.name
}

output "backend_service_name" {
  description = "ECS Backend service name"
  value       = aws_ecs_service.backend.name
}

output "application_url" {
  description = "Application URL"
  value       = "http://${module.alb.dns_name}"
}

output "api_url" {
  description = "API URL"
  value       = "http://${module.alb.dns_name}/api"
}

terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket         = "tfstate-web-demo-360066926992-1753520101"
    key            = "global/terraform.tfstate"
    region         = "eu-central-1"
    dynamodb_table = "tf-locks-web-demo"
    encrypt        = true
  }
}

provider "aws" {
  region = var.region
}

data "aws_availability_zones" "available" {}

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 5.0"

  name            = "${var.project_name}-vpc"
  cidr            = var.vpc_cidr
  azs             = slice(data.aws_availability_zones.available.names, 0, 2)
  public_subnets  = var.public_subnets
  private_subnets = var.private_subnets
  database_subnets = var.database_subnets

  create_database_subnet_group = true
  enable_nat_gateway = true
  single_nat_gateway = true
  create_igw         = true
}

########################
# Security groups
########################
module "alb_sg" {
  source  = "terraform-aws-modules/security-group/aws"
  version = "~> 5.0"

  name   = "${var.project_name}-alb-sg"
  vpc_id = module.vpc.vpc_id

  description = "Allow inbound HTTP/HTTPS from the internet"
  ingress_with_cidr_blocks = [
    { from_port = 80,  to_port = 80,  protocol = "tcp", cidr_blocks = "0.0.0.0/0" },
    { from_port = 443, to_port = 443, protocol = "tcp", cidr_blocks = "0.0.0.0/0" },
  ]

  egress_with_cidr_blocks = [
    { from_port = 0, to_port = 0, protocol = "-1", cidr_blocks = "0.0.0.0/0" },
  ]
}

module "db_sg" {
  source  = "terraform-aws-modules/security-group/aws"
  version = "~> 5.0"

  name   = "${var.project_name}-db-sg"
  vpc_id = module.vpc.vpc_id

  description = "MySQL access from ECS tasks"
  ingress_with_cidr_blocks = [
    { from_port = 3306, to_port = 3306, protocol = "tcp", cidr_blocks = var.vpc_cidr },
  ]
}

########################
# ALB
########################
module "alb" {
  source  = "terraform-aws-modules/alb/aws"
  version = "~> 9.0"

  name            = "${var.project_name}-alb"
  load_balancer_type = "application"
  vpc_id          = module.vpc.vpc_id
  subnets         = module.vpc.public_subnets
  security_groups = [module.alb_sg.security_group_id]
}

########################
# ECS
########################
resource "aws_ecs_cluster" "main" {
  name = "${var.project_name}-cluster"
  setting {
    name  = "containerInsights"
    value = "enabled"
  }
}

resource "aws_ecr_repository" "web" {
  name                 = "${var.project_name}-web"
  image_tag_mutability = "IMMUTABLE"
  force_delete         = true
}

########################
# RDS MySQL
########################
module "db" {
  source  = "terraform-aws-modules/rds/aws"
  version = "~> 6.0"

  identifier           = "${var.project_name}-mysql"
  engine               = "mysql"
  engine_version       = "8.0"
  family               = "mysql8.0"
  instance_class       = "db.t3.micro"
  allocated_storage    = 20

  username             = var.db_username
  password             = var.db_password

  db_subnet_group_name = module.vpc.database_subnet_group
  vpc_security_group_ids = [module.db_sg.security_group_id]
  publicly_accessible  = false

  apply_immediately    = true
  skip_final_snapshot  = true
}

# URL Monitoring System

A cloud-based URL Monitoring System that continuously monitors website availability, tracks response times, stores monitoring history, and provides real-time visibility into website health through a centralized dashboard.

The system is built using AWS cloud services and follows modern DevOps practices with Infrastructure as Code (Terraform) and Continuous Integration/Continuous Deployment (Jenkins).

---

# Architecture

```text
                    User
                      │
                      ▼
                CloudFront
                      │
                      ▼
               S3 Frontend
                      │
               API Requests
                      │
                      ▼
              EC2 Backend
             (Node.js Express)
                      │
                      ▼
                  DynamoDB
```

---

# AWS Services Used

| Service           | Purpose                                          |
| ----------------- | ------------------------------------------------ |
| Amazon EC2        | Hosts the Node.js backend application            |
| Amazon S3         | Hosts the frontend dashboard                     |
| Amazon CloudFront | Global content delivery and caching              |
| Amazon DynamoDB   | Stores monitored URLs and monitoring history     |
| AWS IAM           | Access management and permissions                |
| Terraform         | Infrastructure provisioning                      |
| Jenkins           | Continuous Integration and Continuous Deployment |

---

# Features

* Website Availability Monitoring
* Response Time Tracking
* Real-Time Status Dashboard
* Monitoring History
* Website Performance Analytics
* Infrastructure as Code
* CI/CD Automation
* Cloud-Based Deployment

---

# Project Workflow

## 1. User Access

Users access the application through CloudFront.

```text
User
 ↓
CloudFront
 ↓
S3 Frontend
```

CloudFront provides low-latency access and caches static assets globally.

---

## 2. Website Registration

Users register websites through the monitoring dashboard.

Example:

```json
{
  "name": "Google",
  "url": "https://google.com"
}
```

The request is sent to the backend API running on EC2.

```text
Frontend
 ↓
EC2 Backend
 ↓
DynamoDB
```

---

## 3. Monitoring Process

The backend continuously monitors registered websites.

Monitoring Steps:

1. Retrieve URLs from DynamoDB
2. Send HTTP requests to each website
3. Measure response time
4. Capture status code
5. Determine website availability

Example:

```text
Status Code : 200
Response Time : 120 ms
Status : UP
```

---

## 4. Store Monitoring Results

All monitoring data is stored in DynamoDB.

### URLs Table

Stores website information and latest status.

Attributes:

```text
urlId
url
name
status
statusCode
responseTime
lastChecked
createdAt
```

### MonitoringResults Table

Stores monitoring history.

Attributes:

```text
urlId
timestamp
status
statusCode
responseTime
```

---

## 5. Dashboard Analytics

The dashboard displays:

* Total Websites
* Active Websites
* Inactive Websites
* Average Response Time
* Monitoring History
* Website Status Overview

---

# CI/CD Pipeline

Jenkins automates deployment and infrastructure updates.

```text
Developer
    ↓
GitHub Push
    ↓
Jenkins Pipeline
    ↓
Build Application
    ↓
Run Validation
    ↓
Deploy Backend to EC2
    ↓
Deploy Frontend to S3
    ↓
CloudFront Distribution
    ↓
Production Environment
```

---

# Infrastructure as Code

Terraform provisions and manages AWS infrastructure.

Managed Resources:

* EC2 Instance
* S3 Bucket
* CloudFront Distribution
* DynamoDB Tables
* IAM Roles
* Security Groups

Terraform Commands:

```bash
terraform init
terraform validate
terraform plan
terraform apply
```

---

# API Endpoints

## Get All Websites

```http
GET /api/websites
```

## Create Website

```http
POST /api/websites
```

Request:

```json
{
  "name": "Google",
  "url": "https://google.com"
}
```

## Delete Website

```http
DELETE /api/websites/:id
```

## Website History

```http
GET /api/websites/:id/history
```

## Statistics

```http
GET /api/stats
```

---

# Deployment Workflow

```text
GitHub
   ↓
Jenkins
   ↓
Terraform
   ↓

AWS Infrastructure

├── CloudFront
├── S3
├── EC2
├── DynamoDB
└── IAM

   ↓

URL Monitoring System
```

---

# Benefits

* Automated Website Monitoring
* Real-Time Status Tracking
* Historical Monitoring Data
* Scalable Cloud Infrastructure
* Infrastructure as Code
* Automated Deployment Pipeline
* Global Content Delivery using CloudFront

---

# Author

**Kavin Raj**

URL Monitoring System
Cloud-Based Website Monitoring Platform

Here are the revised instructions for the LearnWeb project:

# 📚 LearnWeb - Serverless React App 🚀

Welcome to **LearnWeb**! This project will teach you how to:
- Deploy a React app using **S3 + CloudFront + Route 53**
- Implement user authentication using **API Gateway + Lambda + DynamoDB**
- Upload files to **S3** and process them using **Lambda**
- Retrieve & display a list of uploaded files
- Send user notifications using **SNS**

## 📌 Project Setup

### Clone the repository
```sh
git clone https://github.com/yourusername/learnweb.git
cd learnweb
```

### Install dependencies
```sh
npm install
```

### Start the development server
```sh
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📌 Deployment Instructions

### Deploy React App to S3

1. Build the project:
    ```sh
    npm run build
    ```
2. Create an S3 bucket:
    ```sh
    aws s3 mb s3://your-bucket-name
    ```
3. Upload build files to S3:
    ```sh
    aws s3 sync build/ s3://your-bucket-name --delete
    ```
4. Enable Static Website Hosting in the S3 Console.

### Configure CloudFront

1. Create a CloudFront distribution pointing to the S3 bucket.
2. Restrict S3 bucket access using Origin Access Control (OAC).
3. Update Route 53 DNS records to point to CloudFront.

## 📌 Student Tasks (Backend Integration)

### Page Tasks and AWS Services

- **Signup**: Implement `/signup` API to store users using **API Gateway + Lambda + DynamoDB**
- **Login**: Validate user credentials via `/login` API using **API Gateway + Lambda + DynamoDB**
- **Upload**: Generate signed URL via `/upload` API using **API Gateway + Lambda + S3**
- **Dashboard**: Fetch uploaded files via `/list-files` API using **API Gateway + Lambda + DynamoDB**
- **File Processing**: Process S3 uploads & notify users via **SNS** using **Lambda + S3 + SNS**

## 📌 API Endpoints

- **/signup** (POST): Stores user details in DynamoDB
- **/login** (POST): Validates credentials, returns JWT
- **/upload** (POST): Generates signed S3 URL
- **/list-files** (GET): Retrieves user’s uploaded files
- **/process-file** (S3 Trigger): Processes file metadata

## 📌 Useful AWS Commands

### List S3 bucket contents
```sh
aws s3 ls s3://your-bucket-name --recursive
```

### Deploy Lambda function
```sh
aws lambda update-function-code --function-name MyLambdaFunction --zip-file fileb://function.zip
```

### View DynamoDB table
```sh
aws dynamodb scan --table-name UsersTable
```

## 📌 How to Implement Each Page

### Signup Page
**File**: `src/pages/Signup.tsx`
- Call API Gateway `/signup` endpoint
- Store user details in DynamoDB
- Redirect to Login Page after success

### Login Page
**File**: `src/pages/Login.tsx`
- Call API Gateway `/login` endpoint
- Validate user credentials against DynamoDB
- Store JWT token in localStorage
- Redirect to Dashboard upon success

### Upload Page
**File**: `src/pages/Upload.tsx`
- Call API Gateway `/upload` to get a signed URL
- Upload file directly to S3
- Display success/error messages

### Dashboard Page
**File**: `src/pages/Dashboard.tsx`
- Call API Gateway `/list-files` to fetch uploaded files
- Display uploaded files list
- Fetch user details from API Gateway

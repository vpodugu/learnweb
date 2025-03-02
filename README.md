# 📚 LearnWeb - Serverless React App 🚀

Welcome to **LearnWeb**! This is a **React.js project** where you'll learn how to:
✅ Deploy a React app using **S3 + CloudFront + Route 53**  
✅ Implement user authentication using **API Gateway + Lambda + DynamoDB**  
✅ Upload files to **S3** and process them using **Lambda**  
✅ Retrieve & display a list of uploaded files  
✅ Send user notifications using **SNS**  

---

## 📌 **1️⃣ Project Setup**
### **🔹 Clone the repository**
```sh
git clone https://github.com/yourusername/learnweb.git
cd learnweb

🔹 Install dependencies
sh
Copy
Edit
npm install
🔹 Start the development server
sh
Copy
Edit
npm start
Open http://localhost:3000 in your browser.

📌 2️⃣ Deployment Instructions
🔹 Deploy React App to S3
Build the project:
sh
Copy
Edit
npm run build
Create an S3 bucket:
sh
Copy
Edit
aws s3 mb s3://your-bucket-name
Upload build files to S3:
sh
Copy
Edit
aws s3 sync build/ s3://your-bucket-name --delete
Enable Static Website Hosting in S3 Console.
🔹 Configure CloudFront
Create CloudFront distribution pointing to the S3 bucket.
Restrict S3 bucket access using Origin Access Control (OAC).
Update Route 53 DNS records to point to CloudFront.
📌 3️⃣ Student Tasks (Backend Integration)
Page	Task	AWS Service
Signup	Implement /signup API to store users	API Gateway + Lambda + DynamoDB
Login	Validate user credentials via /login API	API Gateway + Lambda + DynamoDB
Upload	Generate signed URL via /upload API	API Gateway + Lambda + S3
Dashboard	Fetch uploaded files via /list-files API	API Gateway + Lambda + DynamoDB
File Processing	Process S3 uploads & notify user via SNS	Lambda + S3 + SNS
📌 4️⃣ API Endpoints
Endpoint	Method	Description
/signup	POST	Stores user details in DynamoDB
/login	POST	Validates credentials, returns JWT
/upload	POST	Generates signed S3 URL
/list-files	GET	Retrieves user’s uploaded files
/process-file	S3 Trigger	Processes file metadata
📌 5️⃣ Useful AWS Commands
🔹 List S3 bucket contents
sh
Copy
Edit
aws s3 ls s3://your-bucket-name --recursive
🔹 Deploy Lambda function
sh
Copy
Edit
aws lambda update-function-code --function-name MyLambdaFunction --zip-file fileb://function.zip
🔹 View DynamoDB table
sh
Copy
Edit
aws dynamodb scan --table-name UsersTable
📌 6️⃣ How to Implement Each Page
Signup Page
📌 File: src/pages/Signup.tsx ✅ Tasks:

Call API Gateway /signup endpoint
Store user details in DynamoDB
Redirect to Login Page after success
Login Page
📌 File: src/pages/Login.tsx ✅ Tasks:

Call API Gateway /login endpoint
Validate user credentials against DynamoDB
Store JWT token in localStorage
Redirect to Dashboard upon success
Upload Page
📌 File: src/pages/Upload.tsx ✅ Tasks:

Call API Gateway /upload to get a signed URL
Upload file directly to S3
Display success/error messages
Dashboard Page
📌 File: src/pages/Dashboard.tsx ✅ Tasks:

Call API Gateway /list-files to fetch uploaded files
Display uploaded files list
Fetch user details from API Gateway

# README for Backend

This directory contains the backend implementation of the Todo application using AWS services with the AWS Cloud Development Kit (CDK).

## Overview

The backend is designed to provide the necessary infrastructure for the Todo application, including:

- AWS Cognito for user authentication (configured without login).
- API Gateway to expose the backend services.
- Lambda functions to handle business logic.

## Getting Started

### Prerequisites

- Node.js (version 14.x or later)
- AWS CDK (version 2.x or later)
- AWS account with appropriate permissions

### Installation

1. Navigate to the backend directory:

   cd backend

2. Install the dependencies:

   npm install

### Deploying the Backend

To deploy the backend resources, run the following command:

cdk deploy

This command will provision the necessary AWS resources defined in the `todo-app-stack.ts` file.

### Cognito Setup

The AWS Cognito configuration is handled in the `cognito-setup.ts` file. It sets up user pools and identity pools without requiring user login, allowing for anonymous access to the application.

### Cleanup

To remove the deployed resources, run:

cdk destroy

This command will delete all the resources created during the deployment.

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
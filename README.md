# Complaint Management System

This web application allows users to raise complaints, and administrators can view, address, and manage them. It is built using Node.js with Next.js for the backend, React.js for the frontend, and MongoDB for data storage. The system also includes email notifications for new complaint submissions and status updates.

## Features

1. **Complaint Submission (User Interface)**:
   - Users can submit complaints with the following fields:
     - Complaint Title (Text input)
     - Description (Text area)
     - Category (Dropdown selection with options like "Product", "Service", and "Support")
     - Priority (Radio buttons with options: "Low", "Medium", "High")
     - Submit Button to submit complaints.

2. **Complaint Management (Admin Interface)**:
   - Admins can view and manage complaints in a table with:
     - Complaint Title, Category, Priority, Date Submitted, and Status.
     - Admins can filter complaints by status or priority.
     - Admins can view complaint details and update the status (e.g., mark as "Resolved").
     - Admins can delete complaints.

3. **Backend & Database (MongoDB)**:
   - MongoDB stores complaints with the following schema:
     - `title`: String
     - `description`: String
     - `category`: String
     - `priority`: String
     - `status`: String ("Pending", "In Progress", "Resolved")
     - `dateSubmitted`: Date
   - The backend handles CRUD operations for complaints:
     - `POST /complaints`: Users create new complaints.
     - `GET /complaints`: Admins retrieve all complaints.
     - `PUT /complaints/:id`: Admins update complaint status.
     - `DELETE /complaints/:id`: Admins delete complaints.

4. **Email Notification Functionality**:
   - Integrated email notifications using Nodemailer or SendGrid:
     - **New Complaint Submission:** Admin is notified when a new complaint is submitted.
     - **Status Update:** Admin receives an email when a complaint's status is updated.

5. **Frontend (React)**:
   - A responsive UI for:
     - Submitting complaints (for users).
     - Viewing and managing complaints (for admins).
     - Filtering complaints by status or priority.

## Demo Links

- **Frontend Demo:** [Live Demo](https://resolve-hub-frontend.vercel.app/)
- **Admin Demo:** [Live Demo](https://resolve-hub-admin.vercel.app/)
- **Backend Demo:** [Live API](https://resolve-hub-backend.vercel.app/)


## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/complaint-management-system.git
cd complaint-management-system

# ResumeAI

## 📌 Project Overview
The **AI-Powered Resume Analyzer** is an advanced web application built using the **MERN stack** that allows users to upload resumes in **PDF or DOCX** format. It utilizes **AI and NLP** to extract key details (skills, experience, education) and compares them with job descriptions to provide a **match percentage** and actionable **improvement suggestions**.

This tool helps **job seekers refine their resumes** and assists **recruiters in screening candidates efficiently**.

---

## 🚀 Features

- Secure User Authentication (Username/Password & Google OAuth)
- Resume Upload (PDF/DOCX Support)
- AI/NLP-based Resume Parsing (Extracts key sections: Skills, Experience, Education)
- Job Description Matching (Calculates relevance score based on job posting)
- AI-Powered Resume Enhancement Suggestions
- User Dashboard to Manage Resumes & Reports
- Admin Panel for Managing Users & System Insights
- Role-Based Access Control (RBAC) & Data Security Measures
- Fully Responsive UI for Web & Mobile Users
- Deployment on Cloud (Frontend & Backend)

---

## 🏗️ Tech Stack

### **Frontend:**

- React.js (Context API/Redux for state management)
- Axios for API Calls

### **Backend:**

- Node.js & Express.js
- MongoDB with Mongoose ORM
- Multer for File Upload Handling
- JWT Authentication (JSON Web Tokens)
- Passport.js (Google OAuth)

### **AI/NLP Processing:**

- SpaCy / Hugging Face (Natural Language Processing)
- OpenAI API (Optional: Advanced AI Processing)
- pdf-parse / mammoth.js (Resume Parsing for PDF/DOCX)

### **Cloud & Deployment:**

- Frontend: Vercel / Netlify
- Backend: Render / AWS / Vercel
- Database: MongoDB Atlas
- Storage: AWS S3 / Firebase Storage

---


## 🎯 API Endpoints

### **User Authentication**

- **POST** `/api/auth/register` - Register new user
- **POST** `/api/auth/login` - Login user & get JWT
- **GET** `/api/auth/google` - Google OAuth Login

### **Resume Management**

- **POST** `/api/resume/upload` - Upload resume (PDF/DOCX)
- **GET** `/api/resume/:id` - Get parsed resume details
- **DELETE** `/api/resume/:id` - Delete uploaded resume

---

## ✅ Future Enhancements

- Job Recommendation System – AI-driven job suggestions based on resume data.
- Email Notifications – Automated reports on resume analysis.
- AI-Generated Interview Questions – Custom questions based on experience & job role.
- Multi-Language Support – Resume parsing for different languages.

---

**Render Link** :- https://s84-aryaman-capstone-resumeai-4.onrender.com


**Netlify Link** :- https://resumebuilderai-capstone.netlify.app/

---

## 📞 Contact

👨‍💼 **Aryaman Panwar**  
📧 [**aryamanworks20@gmail.com**](mailto:aryamanworks20@gmail.com)  
🔗 [GitHub](https://github.com/aryamanhubb-22/)  

If you like this project, don’t forget to ⭐ star the repository! 🚀


# RBAC (Role-Based Access Control) API

This is a Node.js + Express.js project implementing **Role-Based Access Control (RBAC)**. It provides a secure authentication system and restricts access to certain routes based on user roles (`user`, `manager`, `admin`).

## 📁 Project Structure

RBAC/<br>
├── node_modules/<br>
├── src/<br>
│ &nbsp;&nbsp;├── config/<br>
│ &nbsp;&nbsp;│ &nbsp;&nbsp;└── dbConnect.js &nbsp;&nbsp;&nbsp;&nbsp;# MongoDB connection<br>
│ &nbsp;&nbsp;├── controllers/<br>
│ &nbsp;&nbsp;│ &nbsp;&nbsp;└── authController.js &nbsp;&nbsp;&nbsp;&nbsp;# Auth logic (register, login)<br>
│ &nbsp;&nbsp;├── middleware/<br>
│ &nbsp;&nbsp;│ &nbsp;&nbsp;├── authMiddleware.js &nbsp;&nbsp;&nbsp;&nbsp;# JWT authentication<br>
│ &nbsp;&nbsp;│ &nbsp;&nbsp;└── roleMiddleware.js &nbsp;&nbsp;&nbsp;&nbsp;# Role-based access control<br>
│ &nbsp;&nbsp;├── models/<br>
│ &nbsp;&nbsp;│ &nbsp;&nbsp;└── userModel.js &nbsp;&nbsp;&nbsp;&nbsp;# Mongoose user schema<br>
│ &nbsp;&nbsp;├── routes/<br>
│ &nbsp;&nbsp;│ &nbsp;&nbsp;├── authRoutes.js &nbsp;&nbsp;&nbsp;&nbsp;# /register, /login<br>
│ &nbsp;&nbsp;│ &nbsp;&nbsp;└── userRoutes.js &nbsp;&nbsp;&nbsp;&nbsp;# /admin, /manager (protected)<br>
│ &nbsp;&nbsp;└── index.js &nbsp;&nbsp;&nbsp;&nbsp;# Entry point<br>
├── .env &nbsp;&nbsp;&nbsp;&nbsp;# Environment variables<br>
├── .env.example &nbsp;&nbsp;&nbsp;&nbsp;# Sample .env<br>
├── .gitignore<br>
├── package-lock.json<br>
└── package.json<br>

---

## 🚀 Features

- ✅ JWT-based authentication<br>
- ✅ Role-based access to specific routes (`user`, `manager`, `admin`)<br>
- ✅ Modular structure for scalability<br>
- ✅ MongoDB + Mongoose for database<br>
- ✅ Middleware-driven security logic<br>

---

## 🔐 Roles

| Role     | Access                          |
|----------|----------------------------------|
| `user`   | Basic access                     |
| `manager`| Access to manager routes         |
| `admin`  | Access to admin and manager routes |

---

## 📦 Installation

```bash
git clone https://github.com/your-username/rbac.git
cd rbac
npm install

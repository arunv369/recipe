I have issue in connecting the Mongoose with ATLAS MongoDB DATABASE it showing error like
ERROR:
Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted. Make sure your current IP address is on your Atlas cluster's IP whitelist: https://www.mongodb.com/docs/atlas/security-whitelist/

I Connected with Mentor - Venkata Gopichand regarding the issue, mentor said like
-> The issue may be due to our area.

But its connecting with MongoDB Compass and i testes API Endpoints everything is working Fine

The only Problem is connecting with the ATLAS MongoDB DATABASE

So in the render it may not show the Data

MONGO_URL=mongodb+srv://2001arunv:recipe123@cluster0.ekse3tz.mongodb.net/

API DOCUMENTATION : https://documenter.getpostman.com/view/30503386/2sB2cYbfLr

# 🍽️ Recipes App (Node.js, Express, MongoDB)

A **CRUD** (Create, Read, Update, Delete) API for managing recipes using **Node.js**, **Express.js**, and **MongoDB** with **Mongoose**.  
The project follows the **MVC pattern** and includes **Postman API documentation**.

## 🚀 Features

- **Create, Read, Update, Delete Recipes**
- **MongoDB Integration with Mongoose**
- **Postman API Documentation**
- **Error Handling & Validation**
- **Follows MVC Architecture**

---

## 📦 Tech Stack

- **Node.js** (Backend)
- **Express.js** (Framework)
- **MongoDB & Mongoose** (Database & ORM)
- **Postman** (API Testing)

---

## 📌 Setup Instructions

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/arunv369/recipe
cd recipe


2️⃣ Install Dependencies
npm install

3️⃣ Run the Server
npm start

The server will run on http://localhost:5000

```

📌 Sample Recipes (For Testing)
[
{
"title": "Chicken Curry",
"ingredients": ["Chicken", "Curry Powder", "Coconut Milk"],
"instructions": "Cook chicken with spices and coconut milk."
},
{
"title": "Garlic Butter Shrimp",
"ingredients": ["Shrimp", "Butter", "Garlic", "Lemon"],
"instructions": "Sauté shrimp in garlic butter, add lemon juice."
}
]

# 🔗 URL Shortener

A simple **URL Shortener** API built using **Node.js**, **Express**, and **MongoDB**. Supports **user authentication**, **short URL generation**, and **click tracking** with stats.

## 🚀 Features

- ✅ User authentication (Register/Login)
- ✅ Generate short URLs
- ✅ Track click statistics
- ✅ Get URL details
- ✅ Delete short URLs

## 🛠️ Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Pushkal-vashishtha/url-shortner.git
   cd url-shortner/server
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables in `.env`:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   BASE_URL=http://localhost:5000
   ```

4. Start the server:
   ```sh
   npm start  # or nodemon server.js
   ```

## 🔑 Authentication

### 1️⃣ Register User
**Endpoint:** `POST /api/auth/register`  
**Request Body:**
   ```json
   {
     "username": "Pushkal Vashishtha",
     "email": "p@gmail.com",
     "password": "Pushkal@123"
   }
   ```
**Response:**
   ```json
   {
     "message": "User registered successfully"
   }
   ```

### 2️⃣ Login User
**Endpoint:** `POST /api/auth/login`  
**Request Body:**
   ```json
   {
     "email": "p@gmail.com",
     "password": "Pushkal@123"
   }
   ```
**Response:**
   ```json
   {
     "token": "your_jwt_token"
   }
   ```

---

## 🔗 URL Shortening

### 1️⃣ Create Short URL
**Endpoint:** `POST /api/url/shorten`  
**Headers:**
   ```json
   {
     "Authorization": "Bearer your_jwt_token"
   }
   ```
**Request Body:**
   ```json
   {
     "originalUrl": "https://www.google.com"
   }
   ```
**Response:**
   ```json
   {
     "shortUrl": "http://localhost:5000/api/url/abc123"
   }
   ```

### 2️⃣ Redirect to Original URL
**Endpoint:** `GET /:shortUrl`
- Redirects to the original long URL.

---

## 📊 URL Statistics

### 1️⃣ Get URL Stats
**Endpoint:** `GET /api/url/stats/:shortUrl`  
**Response:**
   ```json
   {
     "originalUrl": "https://www.google.com",
     "shortUrl": "http://localhost:5000/api/url/abc123",
     "clicks": 5,
     "createdAt": "2025-03-04T12:00:00Z"
   }
   ```

---

## 📌 Notes
- **Authentication required** for creating short URLs.
- **Anyone can access** shortened URLs & stats.
- **MongoDB** is used for storing users & URLs.

---

## 📜 License
MIT License

🚀 Happy Coding!

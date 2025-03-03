# **URL Shortener 🔗**

A simple **URL Shortener API** built with **Node.js**, **Express**, and **MongoDB** that generates short URLs and redirects users to the original URLs.  

---

## **📌 Features**
- 🔗 **Shorten URLs** and get a unique short URL  
- 🚀 **Redirect** short URLs to original URLs  
- 📊 **Track clicks** on shortened URLs  
- ⏳ **Auto-expiry after 7 days**  
- 🗄️ **MongoDB database** for URL storage  

---

## **🚀 Installation**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Pushkal-vashishtha/url-shortner.git
cd url-shortner
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the project root and add:
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/url-shortener?retryWrites=true&w=majority
BASE_URL=http://localhost:5000
```

### **4️⃣ Start the Server**
```sh
npm start
```
Server runs at **`http://localhost:5000`** 🚀  

---

## **📡 API Endpoints**
### **1️⃣ Shorten a URL**
- **Endpoint:** `POST /api/url/shorten`
- **Request Body:**
  ```json
  {
    "originalUrl": "https://example.com"
  }
  ```
- **Response:**
  ```json
  {
    "shortUrl": "http://localhost:5000/abc123"
  }
  ```

### **2️⃣ Redirect to Original URL**
- **Endpoint:** `GET /:shortUrl`
- **Example:**  
  ```
  GET http://localhost:5000/abc123
  ```
- **Response:** Redirects to `https://example.com`

---

## **📜 License**
This project is **open-source** under the **MIT License**.  

---

## **🙌 Contributing**
Feel free to contribute! Open a PR if you have improvements.  

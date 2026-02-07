# 💳 RazorPay-Payment-Gateway-Integration-MERN-Stack
A full-stack payment integration project built using the MERN stack, featuring secure Razorpay checkout, order creation, and payment verification. 🚀 Designed with best practices for API handling and backend security, this project demonstrates real-world payment workflow implementation—perfect for learning production-ready integrations. 🔐⚡

---

## 🚀 Features

✅ Secure Razorpay Checkout Integration  
✅ Order Creation via Backend  
✅ Payment Signature Verification  
✅ RESTful API Architecture  
✅ Environment-based Configuration  
✅ Scalable Folder Structure  
✅ Production-ready Practices  

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Axios
- Vite

**Backend:**
- Node.js
- Express.js

**Payment Gateway:**
- Razorpay API

**Other Tools:**
- dotenv
- cors
- nodemon

---

## 📂 Project Structure

```
├── backend/
│   ├── config/
│   │   └── config.env
│   ├── controller/
│   │   └── productController.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── app.js
│   └── server.js
├── frontend/
│   ├── public/
│   │   ├── images/
│   │   │   ├── bag.jpg
│   │   │   ├── headphone.jpg
│   │   │   ├── hoodie.jpg
│   │   │   ├── jacket.jpg
│   │   │   ├── jeans.png
│   │   │   ├── napkins.jpg
│   │   │   ├── shoes.jpg
│   │   │   └── stole.jpg
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   │   └── react.svg
│   │   ├── components/
│   │   │   ├── data.js
│   │   │   ├── PaymentSuccess.jsx
│   │   │   └── Products.jsx
│   │   ├── styles/
│   │   │   ├── PaymentSuccess.css
│   │   │   └── Products.css
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
├── node_modules/
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/yourusername/RazorPay-Payment-Gateway-Integration-MERN-Stack.git
```

### 2️⃣ Install dependencies

> Backend:

```
cd backend
npm install
```

> Frontend:

```
cd frontend
npm install
```

### 3️⃣ Configure Environment Variables

Create a .env or config.env file inside backend:

```
PORT=8000
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_SECRET=your_secret
```

⚠️ Never commit your .env file.

### 4️⃣ Run the project

> Start Backend

```
nodemon .\server.js
```

> Start Frontend

```
npm run dev
```

---

## 💳 Payment Flow

1️⃣ User clicks Checkout
2️⃣ Backend creates Razorpay order
3️⃣ Razorpay popup opens
4️⃣ User completes payment
5️⃣ Backend verifies payment signature
6️⃣ Payment confirmed ✅

---

## 🔐 Security Best Practices Implemented

* Secrets stored in environment variables

* Backend-only payment verification

* No exposure of API secret

* Structured error handling

---

## 🎯 Learning Outcomes

This project helped strengthen:

✔ Full-stack development skills
✔ Payment gateway integration
✔ API handling
✔ Backend security
✔ Production-level coding practices

---

## 📸 Future Improvements

🚀 Add payment success email
🚀 Store transactions in database
🚀 Implement user authentication
🚀 Deploy to cloud (AWS / Render)
🚀 Add webhook support

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## ⭐ Support

If you like this project, consider giving it a star ⭐ — it helps others discover it!

---

## 👨‍💻 Author

Om Pimple
Aspiring Full Stack Developer 🚀

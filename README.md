# 💡 ThinkBoard — MERN Stack Application

**ThinkBoard** is a full-stack web application designed to quickly capture, organize, and manage thoughts and ideas in real time.

---

## Project Goals & Motivation

This project was built primarily to **deepen my backend knowledge in Node.js and Express**. Having built a few projects prior, I wanted to build a complete full-stack architecture, connecting a Node.js REST API with a React frontend using **Axios**.

Key takeaways from this build:
- **Backend Focus:** Strengthened Node.js, Express REST API design, MongoDB integration, and rate-limiting using Upstash Redis.
- **Frontend Integration:** Refreshed React fundamentals and learned how to structure asynchronous API communication using Axios.
- **First Time with Tailwind CSS:** Explored Tailwind CSS and pre-styled DaisyUI components for the first time.

---

## Live Demo

Check out the live application here:  
👉 **[ThinkBoard Live Demo](https://your-render-app-url.onrender.com)** *(replace with your actual Render URL)*

---

## Features

- **Create:** Add new notes with a title and a detailed description.
- **Read:** View all saved thoughts on a clean board interface.
- **Update:** Edit existing entries whenever ideas change.
- **Delete:** Remove notes when no longer needed.
- **Responsive UI:** Modern layout powered by Tailwind CSS and DaisyUI.

---

## Tech Stack

### **Backend (Primary Focus)**
- **Node.js** & **Express.js** (REST API)
- **MongoDB Atlas** (Database)
- **Upstash Redis** (Rate limiting)

### **Frontend**
- **React** (built with **Vite**)
- **Axios** (API HTTP requests)
- **Tailwind CSS** + **DaisyUI**

---

## ⚡ Local Setup

### **Clone the repository:**
   ```bash
   git clone [https://github.com/mehdi-bellache/mern-notes-app.git](https://github.com/mehdi-bellache/mern-notes-app.git)
   cd mern-notes-app
   ```

### **Set up environment variables:**
   Create a `.env` file inside the `backend/` directory with:
   ```env
   MONGO_URI=your_mongodb_connection_string
   UPSTASH_REDIS_REST_URL=your_upstash_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_token
   NODE_ENV=development
   ```

### **Build & Start:**
   Run these commands from the root folder:
   ```bash
   npm run build # Installs backend & frontend packages, then builds the client
   npm start     # Starts the backend server
   ```

   Then open `http://localhost:3000` in your browser.

---

## License:
This project is open-source and available under the [MIT License](LICENSE).
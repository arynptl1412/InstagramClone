# 📸 Instagram Clone (Full Stack)

A full‑stack Instagram‑like social media application built with **React,
Node.js, Express, and MongoDB**.\
Users can create accounts, upload posts, like posts, follow users, and
view a personalized feed.

This project demonstrates modern **full‑stack architecture, REST APIs,
authentication, and React state management**.

------------------------------------------------------------------------

# 🚀 Features

## 🔐 Authentication

-   User Registration
-   Secure Login
-   Logout functionality
-   Password hashing using **bcrypt**
-   JWT authentication with cookies

## 📝 Posts

-   Create posts with image and caption
-   View posts in a feed
-   Like / Unlike posts
-   Save posts

## 👥 Users

-   Follow users
-   Unfollow users
-   View followers list
-   View following list

------------------------------------------------------------------------

# 🏗 Project Architecture

Frontend uses a **feature‑based architecture**:

    frontend/
    │
    ├── features/
    │   ├── auth/
    │   ├── post/
    │   └── user/
    │
    ├── shared/
    │   └── components/
    │
    └── context/

Backend structure:

    backend/
    │
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middleware/
    ├── config/
    └── server.js

------------------------------------------------------------------------

# ⚙️ Tech Stack

## Frontend

-   React
-   React Router DOM
-   Axios
-   SCSS
-   Context API

## Backend

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose

## Authentication

-   JWT (JSON Web Token)
-   bcrypt

## Media Storage

-   ImageKit (for storing post images)

------------------------------------------------------------------------

# 📦 Installation

## 1️⃣ Clone the Repository

    git clone https://github.com/yourusername/instagram-clone.git
    cd instagram-clone

## 2️⃣ Install Backend Dependencies

    cd backend
    npm install

## 3️⃣ Create Environment Variables

Create a `.env` file inside the backend folder:

    PORT=3000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_secret_key
    IMAGEKIT_PRIVATEKEY=your_imagekit_key

## 4️⃣ Run Backend

    npm run dev

## 5️⃣ Install Frontend Dependencies

    cd frontend
    npm install

## 6️⃣ Run Frontend

    npm run dev

------------------------------------------------------------------------

# 🌐 API Endpoints

## Authentication

    POST /api/auth/register
    POST /api/auth/login
    POST /api/auth/logout

## Posts

    POST /api/post
    GET  /api/post/feed
    POST /api/post/like/:postId
    POST /api/post/unlike/:postId

## Users

    GET  /api/users/followers
    GET  /api/users/following
    POST /api/users/follow/:userId
    POST /api/users/unfollow/:userId

------------------------------------------------------------------------

# 🧠 Key Concepts Implemented

-   REST API architecture
-   JWT authentication with cookies
-   React Context state management
-   Optimistic UI updates
-   MongoDB relationships (followers / following)
-   Image upload handling
-   Responsive UI design
-   Feature‑based frontend architecture

------------------------------------------------------------------------

# 🧩 Future Improvements

-   Comment system
-   Notifications
-   Stories feature
-   Explore page
-   Profile pages
-   Real‑time updates using WebSockets

------------------------------------------------------------------------

# 👨‍💻 Author

**Aryan Patel**\
Computer Science Student \| Full Stack Developer

GitHub: https://github.com/yourusername

------------------------------------------------------------------------

⭐ If you like this project, consider giving it a star!

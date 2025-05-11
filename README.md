# Credence Analytics - Movie CRUD API

This project is a RESTful API built with **Node.js**, **Express**, **MongoDB**, and **Multer** to perform CRUD operations on a list of movies. Each movie includes a name, summary, and image upload.

---

## 🚀 Features

- Create, Read, Update, Delete movies
- Image upload support using Multer
- MongoDB integration with Mongoose
- Name duplication check
- Error handling and clean responses

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Multer (image/file uploads)
- nodemon (for development)

---

## 📁 Folder Structure


credence_analytics/
├── controllers/
│ └── movieController.js
├── middleware/
│ └── Upload.js
├── models/
│ └── Movie.js
├── routes/
│ └── movieRoutes.js
├── uploads/
│ └── (uploaded image files)
├── server.js
├── package.json
└── README.md

---

## 📦 Installation & Usage

### 1. Clone the repository

```bash
git clone https://github.com/pranav09022001/CredenceAnalytics-PRANAV-API.git
cd CredenceAnalytics-PRANAV-API
2. Install dependencies

npm install
3. Run the development server

npm run dev
The server will start on http://localhost:3000

📂 API Endpoints
Method	Endpoint	Description
POST	/api/movies/create	Create a new movie (with image)
GET	/api/movies/	Get all movies
GET	/api/movies/:id	Get a specific movie by ID
PUT	/api/movies/update/:id	Update movie by ID (with image)
DELETE	/api/movies/delete/:id	Delete movie by ID

⚠️ Important Notes
Duplicate movie names are not allowed (validation is handled in the backend).

MongoDB connection string and port are hardcoded in server.js (no .env used).

Make sure your MongoDB server is running locally or update the connection string as needed.


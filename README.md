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

yaml
Copy
Edit

---

## 📦 Installation & Usage

### 1. Clone the repository

```bash
git clone https://github.com/pranav09022001/CredenceAnalytics-PRANAV-API.git
cd CredenceAnalytics-PRANAV-API
2. Install dependencies
bash
Copy
Edit
npm install
3. Run the development server
bash
Copy
Edit
npm run dev
The server will start on http://localhost:5000

📂 API Endpoints (based on your routes)
Method	Endpoint	Description
POST	/api/movies/create	Create a new movie (with image)
GET	/api/movies/	Get all movies
GET	/api/movies/:id	Get a specific movie by ID
PUT	/api/movies/update/:id	Update movie by ID (with image)
DELETE	/api/movies/delete/:id	Delete movie by ID

For POST and PUT, use multipart/form-data and provide the image with key name img.

🖼 Image Uploads
Image files are uploaded using Multer and stored in the /uploads/ directory.

Serve image files statically via: http://localhost:5000/uploads/<filename>

⚠️ Important Notes
Duplicate movie names are not allowed (validation is handled in the backend).

MongoDB connection string and port are hardcoded in server.js (no .env used).

Make sure your MongoDB server is running locally or update the connection string as needed.

✅ Example Movie Object
json
Copy
Edit
{
  "name": "Avengers: Endgame",
  "summary": "The Avengers assemble for one final battle...",
  "img": "uploads/avengers.jpg"
}


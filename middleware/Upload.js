const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const isValid = allowedTypes.test(path.extname(file.originalname).toLowerCase()) &&
                  allowedTypes.test(file.mimetype);
  isValid ? cb(null, true) : cb("Only JPEG/PNG files are allowed");
};

const upload = multer({ storage, fileFilter });

module.exports = upload;

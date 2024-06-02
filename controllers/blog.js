const BlogModel = require("../models/blog");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads`));
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});
const upload = multer({ storage: storage });

async function addBlog(req, res) {
  const { title, body } = req.body;
  try {
    await BlogModel.create({
      title,
      body,
      createdBy: req.user_id,
      coverImageUrl: `/uploads/${req.file.filename}`,
    });
    return res.status(200).json({ success: "Blog created successfully" });
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

const getBlogs = async (req, res) => {
  try {
    const allBlogs = await BlogModel.find();
    res.status(200).json(allBlogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addBlog, upload, getBlogs };

import express from "express";
import {
  getAllBlogs,
  getBlogById,
  createBlog,
  postComment,
  deleteBlog
} from "../controllers/blogController.js";
import upload from "../middlewares/multer.js";

const router = express.Router(); 

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.delete("/:id",deleteBlog);
router.post("/", upload.single("image"), createBlog); 
router.post("/comment", postComment);

export default router;

import express from "express";
import {
  getProjectById,
  getProjects,
  createProject,
  createProjectReview,
  updateProject,
  deleteProject
} from "../controllers/projectController.js";
import { admin, protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").get(getProjects).post(protect, admin, createProject);
router.route("/:id/reviews").post(protect, admin, createProjectReview);
router
  .route("/:id")
  .get(getProjectById)
  .delete(protect, admin, deleteProject)
  .put(protect, admin, updateProject);

export default router;

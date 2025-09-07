import express from "express";
import {
  createRequest,
  getAllRequests,
  getRequestById,
  getMyRequests,
  updateRequestStatus,
  deleteRequest,
} from "../controllers/request.controller.js";
import { authMiddleware, isAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

// ✅ User routes
router.post("/", authMiddleware, createRequest);          // Naya request create
router.get("/my", authMiddleware, getMyRequests);         // User ke apne requests
router.get("/:requestId", authMiddleware, getRequestById); // Single request details

// ✅ Admin routes
router.get("/", authMiddleware, isAdmin, getAllRequests);       // Sabhi requests
router.put("/:requestId/status", authMiddleware, isAdmin, updateRequestStatus); // Status update
router.delete("/:requestId", authMiddleware, isAdmin, deleteRequest); // Request delete

export default router;
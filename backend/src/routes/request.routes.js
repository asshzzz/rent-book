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
router.post("/createrequest", authMiddleware, createRequest);          // Naya request create
router.get("/myrequest", authMiddleware, getMyRequests);         // User ke apne requests
router.get("/requestId", authMiddleware, getRequestById); // Single request details

// ✅ Admin routes
router.get("/getallrequest", authMiddleware, isAdmin, getAllRequests);       // Sabhi requests
router.put("/requestupdatestatus", authMiddleware, isAdmin, updateRequestStatus); // Status update
router.delete("/deleterequest", authMiddleware, isAdmin, deleteRequest); // Request delete

export default router;
import express from "express";
import {
  createVehicle,
  getAllVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
} from "../controllers/vehicle.controller.js";

const router = express.Router();

// Admin routes
router.post("/createvehicle", createVehicle);
router.put("/updatevehicle", updateVehicle);
router.delete("/deletevehicle", deleteVehicle);

// Public routes
router.get("/getallvehicle", getAllVehicles);
router.get("/vehicleId", getVehicleById);

export default router;

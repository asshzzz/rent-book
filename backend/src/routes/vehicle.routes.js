import express from "express";
import {
  createVehicle,
  getAllVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
} from "../controllers/vehicle.controller.js";
import { syncVehicles } from "../controllers/vehicle.controller.js";
import { isAdmin } from "../middleware/checkRole.js";
import { auth } from "../middleware/auth.js";


const router = express.Router();

router.post("/vehicles/sync", auth, isAdmin, syncVehicles);
// Admin routes
router.post("/createvehicle", createVehicle);
router.put("/updatevehicle", updateVehicle);
router.delete("/deletevehicle", deleteVehicle);

// Public routes
router.get("/getallvehicle", getAllVehicles);
router.get("/vehicleId", getVehicleById);

export default router;

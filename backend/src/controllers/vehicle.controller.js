import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Vehicle } from "../models/vehicle.model.js";

// ✅ Create new vehicle (Admin only)
const createVehicle = asyncHandler(async (req, res) => {
  const { name, type, model, registrationNumber, perDayRent, image } = req.body;

  if (!name || !type || !registrationNumber || !perDayRent) {
    throw new ApiError(400, "Name, type, registration number and per-day rent are required");
  }

  const existingVehicle = await Vehicle.findOne({ registrationNumber });
  if (existingVehicle) {
    throw new ApiError(400, "Vehicle with this registration number already exists");
  }

  const newVehicle = await Vehicle.create({
    name,
    type,
    model,
    registrationNumber,
    perDayRent,
    image,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, newVehicle, "Vehicle added successfully"));
});

// ✅ Get all vehicles
const getAllVehicles = asyncHandler(async (req, res) => {
  const vehicles = await Vehicle.find();
  return res
    .status(200)
    .json(new ApiResponse(200, vehicles, "All vehicles fetched successfully"));
});

// ✅ Get single vehicle by ID
const getVehicleById = asyncHandler(async (req, res) => {
  const { vehicleId } = req.params;

  const vehicle = await Vehicle.findById(vehicleId);
  if (!vehicle) {
    throw new ApiError(404, "Vehicle not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, vehicle, "Vehicle details fetched successfully"));
});

// ✅ Update vehicle (Admin only)
const updateVehicle = asyncHandler(async (req, res) => {
  const { vehicleId } = req.params;

  const updatedVehicle = await Vehicle.findByIdAndUpdate(
    vehicleId,
    req.body,
    { new: true, runValidators: true }
  );

  if (!updatedVehicle) {
    throw new ApiError(404, "Vehicle not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedVehicle, "Vehicle updated successfully"));
});

// ✅ Delete vehicle (Admin only)
const deleteVehicle = asyncHandler(async (req, res) => {
  const { vehicleId } = req.params;

  const deletedVehicle = await Vehicle.findByIdAndDelete(vehicleId);

  if (!deletedVehicle) {
    throw new ApiError(404, "Vehicle not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Vehicle deleted successfully"));
});

export {
  createVehicle,
  getAllVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
};

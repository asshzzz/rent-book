import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { VehicleRentRequest } from "../models/vehicleRentRequest.model.js";
import { Vehicle } from "../models/vehicle.model.js";
import { User } from "../models/user.model.js";

// ✅ Create new vehicle rent request
const createRequest = asyncHandler(async (req, res) => {
  const { vehicle, durationDays, pickupDate, dropoffDate } = req.body;

  if (!vehicle || !durationDays || !pickupDate || !dropoffDate) {
    throw new ApiError(
      400,
      "Vehicle, duration, pickup date and dropoff date are required"
    );
  }

  const selectedVehicle = await Vehicle.findById(vehicle);
  if (!selectedVehicle) {
    throw new ApiError(404, "Vehicle not found");
  }
  if (!selectedVehicle.available) {
    throw new ApiError(400, "Vehicle is not available for rent");
  }

  // Optional: total cost calculate
  const totalCost = selectedVehicle.perDayRent * durationDays;

  const newRequest = await VehicleRentRequest.create({
    user: req.user?._id,
    vehicle,
    durationDays,
    pickupDate,
    dropoffDate,
    totalCost,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, newRequest, "Vehicle rent request created successfully"));
});

// ✅ Get all requests (Admin)
const getAllRequests = asyncHandler(async (req, res) => {
  const requests = await VehicleRentRequest.find()
    .populate("user", "fullName email phone")
    .populate("vehicle", "name type model registrationNumber perDayRent");

  return res
    .status(200)
    .json(new ApiResponse(200, requests, "All vehicle requests fetched successfully"));
});

// ✅ Get single request by ID
const getRequestById = asyncHandler(async (req, res) => {
  const { requestId } = req.params;

  const request = await VehicleRentRequest.findById(requestId)
    .populate("user", "fullName email phone")
    .populate("vehicle", "name type model registrationNumber perDayRent");

  if (!request) {
    throw new ApiError(404, "Request not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, request, "Request details fetched successfully"));
});

// ✅ Get my requests (User)
const getMyRequests = asyncHandler(async (req, res) => {
  const requests = await VehicleRentRequest.find({ user: req.user?._id })
    .populate("vehicle", "name type model registrationNumber perDayRent");

  return res
    .status(200)
    .json(new ApiResponse(200, requests, "Your vehicle requests fetched successfully"));
});

// ✅ Update request status (Admin only)
const updateRequestStatus = asyncHandler(async (req, res) => {
  const { requestId } = req.params;
  const { status } = req.body;

  const updatedRequest = await VehicleRentRequest.findByIdAndUpdate(
    requestId,
    { status: status },
    { new: true }
  ).populate("vehicle", "name");

  if (!updatedRequest) {
    throw new ApiError(404, "Request not found");
  }

  // Agar approved hai to vehicle availability false kar do
  if (status === "approved") {
    await Vehicle.findByIdAndUpdate(updatedRequest.vehicle, { available: false });
  }

  // Agar completed ya rejected hai to vehicle wapas available ho jaye
  if (status === "completed" || status === "rejected") {
    await Vehicle.findByIdAndUpdate(updatedRequest.vehicle, { available: true });
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedRequest, "Request status updated successfully"));
});

// ✅ Delete request
const deleteRequest = asyncHandler(async (req, res) => {
  const { requestId } = req.params;

  const request = await VehicleRentRequest.findByIdAndDelete(requestId);

  if (!request) {
    throw new ApiError(404, "Request not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Request deleted successfully"));
});

export {
  createRequest,
  getAllRequests,
  getRequestById,
  getMyRequests,
  updateRequestStatus,
  deleteRequest,
};

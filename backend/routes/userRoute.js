import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  paymentStripe, // Updated to the new payment function
  bookAppointment, // Keep the original appointment booking function
  listAppointment, // Listing user appointments
  cancelAppointment, // Canceling an appointment // Verifying Stripe payment success
  verifyStripe
} from "../controllers/userController.js";

import authUser from "../middleware/authUser.js";
import upload from "../middleware/multer.js";

const userRouter = express.Router();

// User registration and login routes
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

// Profile-related routes
userRouter.get("/get-profile", authUser, getProfile);
userRouter.post("/update-profile", upload.single("image"), authUser, updateProfile);

// Appointment-related routes
userRouter.post("/payment-stripe", authUser, paymentStripe); // Added payment stripe route
userRouter.post("/book-appointment", authUser, bookAppointment); // Appointment booking route
userRouter.get("/appointments", authUser, listAppointment);
userRouter.post("/cancel-appointment", authUser, cancelAppointment);

// Stripe payment verification route
userRouter.post("/verify", authUser, verifyStripe); // Verifying Stripe payment

export default userRouter;

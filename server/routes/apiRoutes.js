const express = require("express");
const router = require("express").Router();
const AppController = require("../controllers/AppController")(db);
const AuthController = require("../controllers/AuthController");
const User = require("../models/UserInfo");

router.post("/login", AuthController.loginUser);
router.post("/signup", AuthController.signup);

// Protect all routes after this middleware
router.use(authController.protect);

// DELETE Routes
router.delete("/deleteMe", userController.deleteMe);

// Only admin have permission to access for the below APIs
router.use(authController.restrictTo("admin"));

//. Get All Users
router.route("/").get(userController.getAllUsers);

// User ID Routes
router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

// GET Routes
router.get("/userInfo", appController.findUser);
router.get("/vehicleInfo", appController.findVehicle);

// POST Routes
router.post("/userInfo", appController.createUser);

// Export router
module.exports = router;

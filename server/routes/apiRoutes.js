const router = require("express").Router();
const AppController = require("../controllers/AppController");
const UserController = require("../controllers/UserController");

// GET Routes: FIND
router.get("/UserInfo", AppController.findUser);
router.get("/VehicleInfo", AppController.findVehicle);

// POST Routes: CREATE
router.post("/UserInfo", AppController.createUser);

// DELETE Routes
router.delete("/deleteMe", UserController.deleteMe);

//. Get All Users
router.route("/").get(UserController.getAllUsers);

router
  .route("/:id")
  .get(UserController.getUser)
  .patch(UserController.updateUser)
  .delete(UserController.deleteUser);

// Export router
module.exports = router;

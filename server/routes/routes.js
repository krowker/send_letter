const { Router } = require("express");
const UserController = require("../controllers/user-controller");
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth-middleware");

const router = new Router();

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 8, max: 32 }),
  UserController.registration
);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.get("/activate/:link", UserController.activate);
router.get("/refresh", UserController.refresh);
router.get("/addresses", authMiddleware, UserController.getContacts);
router.get("/notifications", UserController.getNotifications);
router.get("/getuser", authMiddleware, UserController.getUser);
router.post("/updateuser", authMiddleware, UserController.updateUser)

module.exports = router;

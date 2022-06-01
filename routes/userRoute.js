const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPasword,
  resetPassword,
} = require("../controllers/userController");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/password/forgot").post(forgotPasword);
router.route("/password/reset/:token").put(resetPassword);
/**router.route("/products/new").post(createProduct);*/

module.exports = router;

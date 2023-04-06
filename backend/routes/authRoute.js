const router = require("express").Router();
const { login, register, resetPassword } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.put("/resetpassword", resetPassword)

module.exports = router;
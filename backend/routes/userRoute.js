const getUser = require("../controllers/userController");
const authenticateToken = require("../middleware/authenticateToken");

const router = require("express").Router();


router.get("/getuser", authenticateToken, getUser);

module.exports = router;
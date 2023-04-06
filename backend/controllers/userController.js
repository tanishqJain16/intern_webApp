const User = require("../models/userModel");

const getUser = async (req, res) => {
    try {
      console.log(req.userId);
      const user = await User.findById(req.userId);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: "internal server error :)" });
    }
};

module.exports = getUser;
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const config = require("config");
const secret = config.get("secret");

const auth = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, secret);
    const user = await User.findById(decoded.id);
    if (!user) {
      res.status(403).json({ msg: "not authorized" });
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    res.status(502).json({ msg: error.message });
  }
};

module.exports=auth
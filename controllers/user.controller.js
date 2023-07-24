const User = require("../model/user");
var bc = require("bcryptjs");
const config = require("config");
const secret = config.get("secret");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
  const { fullName, email, password, phone } = req.body;
  try {
    const exiestingUser = await User.findOne({ email });
    if (exiestingUser) {
      res.status(400).json({ msg: "email allready exist" });
    }
    const newUser = new User({
      fullName,
      email,
      password,
      phone,
    });
    const salt = await bc.genSalt(10);
    const hash = await bc.hashSync(password, salt);
    newUser.password = hash;
    await newUser.save();
    const payload = {
      id: newUser._id,
      fullName: newUser.fullName,
      phone: newUser.phone,
    };
    const token = jwt.sign(payload, secret);
    res.status(200).send({
      token,
      user: {
        _id: newUser._id,
        fullName: newUser.fullName,
        phone: newUser.phone,
        password: newUser.password,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const TheUser = await User.findOne({ email });
    if (!TheUser) {
      res.status(402).json({ msg: "invalid email or password" });
    }
    const isMatch = await bc.compare(password, TheUser.password);
    if (!isMatch) {
      res.status(402).json({ msg: "invalid email or password" });
    }
    const payload = {
      id: TheUser._id,
      fullName: TheUser.fullName,
      email: TheUser.email,
    };
    const token = jwt.sign(payload, secret);

    res.status(201).send({
        token,
        user: {
          _id: TheUser._id,
          fullName: TheUser.fullName,
          phone: TheUser.phone,
          password: TheUser.password,
          email: TheUser.email,
        },
      }
    );
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};


exports.getUser=(req,res)=>{
    res.send(req.user)
}
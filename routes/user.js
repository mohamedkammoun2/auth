
const express=require("express");
const { signUp, login, getUser } = require("../controllers/user.controller");
const { signUpRules,validator } = require("../middleware/validator");
const auth = require("../middleware/auth");


router=express.Router();

router.post("/signUp", signUpRules(),validator , signUp)
router.post("/login",login);
router.get("/get",auth,getUser)


module.exports=router
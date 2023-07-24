const { check, validationResult } = require("express-validator");



exports.signUpRules=()=>[
    check("fullName","this field is require").notEmpty(),
    check("email","this should be a valid email").isEmail(),
    check("password","password should be more than 6 digets").isLength({
        min:6
    })
]


exports.validator=(req,res,next)=>{
    const errors=validationResult(req);
    return errors.isEmpty()?next():res.status(401).json({errors:errors.array()})
}
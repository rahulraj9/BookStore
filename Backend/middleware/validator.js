const { buildCheckFunction, body, param } = require("express-validator")
const check = buildCheckFunction(["headers", "params"])

// const validator = require("express-validator")

module.exports = {
    registration: [
        body("fullName")
        .trim()
        .isString()
        .notEmpty().withMessage("FullName is Required!")
        .isAlpha().withMessage("FullName should be only Alphabet!")
        .isLength({ min: 3 }).withMessage("FullName atleast contains  3 character!"),

        body("email")
        .trim()
        .notEmpty().withMessage("Email is Required!")
        .isEmail().withMessage("Email is Invalid!!!"),

        body("password")
        .trim()
        .notEmpty().withMessage("Password is Required!")
        .isLength({ min: 6 }).withMessage("Password atleast contains  6 character!")
        .isLength({ max: 11 }).withMessage("Password Max contains  11 character!")
        .isString(),

        body("mobile")
        .trim()
        .notEmpty().withMessage("Mobile Number is Required!")
        .isLength({ min: 10 }).withMessage("MobileNumber atleast contains  10 digit!")
    ],
    login: [
        body("email")
        .trim()
        .notEmpty().withMessage("Email is Required!")
        .isEmail().withMessage("Email is Invalid!!!"),

        body("password")
        .trim()
        .notEmpty().withMessage("Password is Required!")
        .isLength({ min: 6 }).withMessage("Password atleast contains  6 character!")
        .isString()
        .isLength({ max: 11 }).withMessage("Password Max contains  11 character!")


    ],



}
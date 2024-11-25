const {check} = require('express-validator');
const db = require('../db');
const {compare} = require('bcryptjs');

// Password
const password = check('password')
.isLength({min: 6, max: 15})
.withMessage('Password has to be between 6 and 15 chatacters.');

// Email
const email = check('email').isEmail().withMessage('Please use a valid email.');

// Username
const username = check('username')
.isLength({min: 1, max: 20})
.withMessage('Username has to be between 1 and 20 chatacters.');

// Check if email exists
const emailExists = check('email').custom(async (value) => {
    const {rows} = await db.query("SELECT * FROM users WHERE email = $1", [
        value,
    ])

    if (rows.length) {
        throw new Error('Email already exists!');
    }
});

// Login validation
const loginFieldsCheck = check('email').custom(async(value, { req }) => {
    const user = await db.query("SELECT * FROM users WHERE email = $1", [value]);
    if (!user.rows.length) {
        throw new Error("User doesn't exist.");
    } 

    const validPassword = await compare(req.body.password, user.rows[0].password);

    if (!validPassword) {
        throw new Error("Invalid password.");
    }

    req.user = user.rows[0];
});

module.exports = {
    registerValidation: [email, password, username, emailExists],
    loginValidation: [loginFieldsCheck]
}
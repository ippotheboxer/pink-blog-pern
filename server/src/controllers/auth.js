const db = require("../db");
const {hash} = require('bcryptjs')
const {sign} = require('jsonwebtoken')
const {SECRET} = require('../constants')

exports.getUsers = async(req, res) => {
    try {
        const {rows} = await db.query("SELECT user_id, email, username FROM users");
        return res.status(200).json({
            success: true,
            users: rows
        })
    } catch (error) {
        console.log(error);
    }
}

exports.register = async(req, res) => {
    const {email, username, password} = req.body;
    try {
        const hashedPassword = await hash(password, 10);
       
        await db.query("INSERT INTO users (email, username, password) VALUES ($1, $2, $3)", [email, username, hashedPassword]); 
        return res.status(201).json({
            success: true,
            message: 'Registration was successful'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error:error.message
        })
    }
}

exports.login = async (req, res) => {
    let user = req.user;
    let payload = {
        id: user.user_id,
        email: user.email
    }

    try {
        const token = await sign(payload, SECRET);
        return res.status(200)
        .cookie('token', token, {
            httpOnly: true
        })
        .json({
            success: true,
            message: 'Logged in successfully'
        })
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}

exports.protected = async(req, res) => {
    try {
        return res.status(200).json({
            info: 'Protected info'
        })
    } catch (error) {
        console.log(error);
    }
}

exports.logout = async (req, res) => {
    try {
        return res
        .status(200)
        .clearCookie('token', {httpOnly: true})
        .json({
            success: true,
            message: 'Logged out successfully'
        })
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}
const express = require('express');
const router = express.Router();
const { User } = require('../database')
const JWT = require('jsonwebtoken');
const JWT_SECRET = require('../config');
const { signupSchema, signinSchema } = require('./zodSchema');

router.get('/', (req, res) => {
    res.send('Welcome to SkillSprout')
})


// SIGN UP LOGIC


router.post('/signup', async (req, res) => {

    const success = signupSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ message: 'Invalid request' });
    }

    // CHECKING IF USER EXIST
    const existingUser = await User.findOne({
        email: req.body.email
    })
    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken / Incorrect Inputs!"
        })
    }

    // CREATING NEW USER
    const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    const userId = user._id;


    // JSONWEBTOKEN IMPLEMENTATION
    const token = JWT.sign({
        userId
    }, JWT_SECRET)
    res.json({
        message: "signUp successfully",
        token: token
    })

})


// SIGN IN LOGIC

router.post('/signin', async (req, res) => {
    const success = signinSchema.safeParse(req.body);

    if (!success) {
        res.json({
            message: "Error while logging in"
        })
    }

    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });

    if (user) {
        const token = JWT.sign({
            userId: user._id
        }, JWT_SECRET)

        res.json({
            message: "logged in successfully",
            token: token
        })
        return;
    }
    res.status(411).json({
        message: "Error while loggin in"
    })

})

module.exports = router;
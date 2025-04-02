const express = require('express');
const userRouter = require('./userRouter');
const router = express.Router();

router.use('/user', userRouter); // user routes will be prefixed with /user

module.exports = router;
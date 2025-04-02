const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://chetan:chetanmongo77@mydatabase.hdtma.mongodb.net/SkillSprout");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 4
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },

});


const User = mongoose.model("User", userSchema);


module.exports = {
    User
}
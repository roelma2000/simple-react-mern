const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    coursename: {
        type: String,
        required: true,
    }
});

const UserModel = mongoose.model("users",UserSchema);
module.exports = UserModel;
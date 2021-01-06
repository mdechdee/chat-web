import mongoose from 'mongoose';
import dotenv from 'dotenv';
const SALT = 10;
dotenv.config();

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'The email field is required!'],
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        required: [true, 'The password field is required!'],
    },
    picture: {
        type: String,
        default: ""
    },
    time: {
        type: Date,
        default: Date.now()
    }
});

const ModelUser = mongoose.model('User2', userSchema); // 'PostMessage' is just a name (can change to anything)

export default ModelUser; //module.exports = ModelUser; is identical.
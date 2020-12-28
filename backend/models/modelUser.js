import mongoose from 'mongoose';

//Register
const userSchema = mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    profile_pic: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    time: {
        type: Date,
        default: Date.now()
    }
})

const ModelUser = mongoose.model('User', userSchema); // 'PostMessage' is just a name (can change to anything)

export default ModelUser;
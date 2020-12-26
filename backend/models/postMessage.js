import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now()
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema); // 'PostMessage' is just a name (can change to anything)

export default PostMessage;
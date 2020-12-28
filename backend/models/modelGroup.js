import mongoose from 'mongoose';

const groupSchema = mongoose.Schema({
    group_id: {
        type: String,
        default: "New group"
    },
    time: {
        type: Date,
        default: Date.now()
    },
    messages: {
        type: Array,
        default: []
    },
    members: {
        type: Array,
        default: []
    }
});

const ModelGroup = mongoose.model('Group', groupSchema); // 'PostMessage' is just a name (can change to anything)

export default ModelGroup;
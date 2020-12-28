import PostUser from '../models/modelUser.js';
import PostGroup from '../models/modelGroup.js';
export const getUsers = async (req,res) => {
    try{
        const postMessage = await PostUser.find();

        console.log(postMessage);

        res.status(200).json(postMessage);
    } catch (err) {
        res.status(404).json({message: err.message});
    }
}

export const postUser = async (req,res) => {
    const post = req.body;
    const newPost = new PostUser(post);

    try{
        await newPost.save();

        res.status(201).json(newPost);
    } catch(err) {
        res.status(409).json({message: err.message});
    }
}

export const updateUser = async (req,res,next) => {
    const userId = req.params.userId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    try{
        const result = PostUser.findByIdandUpdate(userId, {$set: updateOps});

        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

export const postGroup = async (req,res) => {
    const post = req.body;
    const newPost = new PostGroup(post);

    try{
        await newPost.save();
        console.log(newPost);
        res.status(201).json(newPost);
    } catch(err) {
        res.status(409).json({message: err.message});
    }
}

export const addMember = async (req,res,next) => {
    try{
        const groupId = req.params.groupId;
        const userId = req.body.userId;
        const group = await PostGroup.findById(groupId);
        const oldMembers = group.members;
        const result = await PostGroup.findByIdAndUpdate(groupId, {$set: {members: [...oldMembers, ...userId]}});

        console.log(result);
        res.status(200).json(result);
        
    } catch (err) {
        res.status(409).json({message: err.message});
    }
}

export const addMessage = async (req,res,next) => {
    try{
        const groupId = req.params.groupId;
        const newMessage = req.body.message;
        const group = await PostGroup.findById(groupId);
        const oldMessages = group.messages;
        const result = await PostGroup.findByIdAndUpdate(groupId, {$set: {messages: [...oldMessages, newMessage]}});

        console.log(result);
        res.status(200).json(result);

    } catch(err){
        res.status(409).json({message: err.message})
    }
}
// https://restapitutorial.com/httpstatuscodes.html

/*
    You can pass array elements separated by slashes - GET /api/person/foo/bar/...

    Define your route as '/api/person/(:arr)*'

    req.params.arr will have the first parameter. req.params[0] will have the rest as string. You split and create an array with these two.

    app.get('/api/person/(:arr)*', function(req, res) {
            var params = [req.params.arr].concat(req.params[0].split('/').slice(1));
            ...
    });

    GET /api/person/foo
    params = ["foo"]

    GET /api/person/foo/bar
    params = ["foo", "bar"]
*/
import ModelUser from '../models/modelUser.js';

export const getUsers = async (req,res) => {
    try{
        const postMessage = await ModelUser.find();

        console.log(postMessage);

        res.status(200).json(postMessage);
    } catch (err) {
        res.status(404).json({message: err.message});
    }
    
}

export const postUser = async (req,res) => {
    const post = req.body;
    const newPost = new ModelUser(post);

    try{
        await newPost.save();

        res.status(201).json(newPost);
    } catch(err) {
        res.status(409).json({message: err.message});
    }
}
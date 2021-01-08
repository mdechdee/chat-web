import ModelGroup from '../models/modelGroup.js';

export const getGroups = async (req,res) => {
    try{
        const postMessage = await ModelGroup.find();

        console.log(postMessage);

        res.status(200).json(postMessage);
    } catch (err) {
        res.status(404).json({message: err.message});
    }
}

export const createGroup = async (req,res) => {
    const post = req.body;
    const newPost = new ModelGroup(post);

    try{
        await newPost.save();
        console.log(1);
        console.log(newPost);
        res.status(201).json(newPost);
    } catch(err) {
        res.status(409).json({message: err.message});
    }
}

export const patchGroup = async (req,res,next) => {
    
}
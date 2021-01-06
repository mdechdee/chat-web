import ModelUser from "../models/modelUser2.js"

export const checkDuplicateUsername = (req,res,next) => {
    ModelUser.findOne({
        username: req.body.username
    }).exec((err,user) => {
        if(err){
            res.status(500).json({message: err});
            return;
        }
        if(user){
            res.status(400).json({message: "Username is already in use!"});
            return;
        }
        next();
    })
}

export const verifySignUp = {checkDuplicateUsername};
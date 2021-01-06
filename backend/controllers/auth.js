import dotenv from "dotenv";
import ModelUser2 from "../models/modelUser2.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
dotenv.config();

export const signup = async (req,res) => {

    let userInfo = req.body;
    userInfo.password = bcrypt.hashSync(req.body.password,8);

    try{
        const user = new ModelUser2(userInfo);

        await user.save((err,user) => {
            if(err){
                res.status(500).json({message:err});
                return;
            }
        });

        let token = jwt.sign({id: user._id}, process.env.SECRET, {
            expiresIn: 86400
        });
        
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

export const signin = (req,res) => {
    ModelUser2.findOne({username: req.body.username})
    .exec((err, user)=>{
        if (err) {
            res.status(500).json({ message: err });
            return;
        }

        if (!user) {
            return res.status(404).json({ 
                auth:false,
                accessToken: null,
                message: "User Not found."
            });
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).json({
                auth:false,
                accessToken: null,
                message: "Invalid Password!"
            });
        }

        var token = jwt.sign({ id: user.id }, process.env.SECRET, {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).json({ auth: true, accessToken: token});

    })
}

export const signout = (req,res) => {
    res.status(200).send({ auth: false, accessToken: null });
}
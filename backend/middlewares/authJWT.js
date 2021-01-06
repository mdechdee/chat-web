import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyToken = (req,res,next) => {
    let token = req.headers["x-access-token"];
    
    if(!token){
        return res.status(403).json({message:"No token provided"});
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if(err){
            return res.status(401).json({message: "Unauthorized!"});
        }
        req.userId = decoded.id;
    })
}

export const authJWT = {verifyToken};
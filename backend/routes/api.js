import express from 'express';
import { getUsers, postUser } from '../controllers/user.js'
import { signup, signin, signout } from '../controllers/auth.js'
import { getGroups, createGroup } from '../controllers/group.js'
import { getMessages, patchMessage } from '../controllers/message.js'
import { verifySignUp } from "../middlewares/verifySignUp.js"
import { verifyToken } from "../middlewares/authJWT.js"

//localhost:5000/api
const router = express.Router();

//User
router.get('/user', getUsers);
router.post('/user', postUser);

//Auth
router.use('/auth', (req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});
router.post("/auth/signup", verifySignUp.checkDuplicateUsername, signup);
router.post("/auth/signin", signin);
router.get("/auth/logout", signout);

//Group
router.get('/group', getGroups);
router.post('/group', createGroup);

//Message
router.get('/message/:groupId', getMessages);
router.patch('/message', patchMessage);

export default router;
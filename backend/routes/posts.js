import express from 'express';
import { getUsers, postUser, updateUser, addMember, addMessage, postGroup } from '../controllers/posts.js'

const router = express.Router();

//localhost:5000/posts/group/1

router.get('/user', getUsers);
router.post('/user', postUser);
router.post('/group', postGroup);
router.patch("/group/add/:groupId", addMember);
router.patch("/message/:groupId", addMessage);
router.patch("/:userId", updateUser);

router.get('/posts', (req,res) =>{
    res.send('We are on posts');
})

export default router;
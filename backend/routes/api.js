import express from 'express';
import { getUsers, postUser } from '../controllers/user.js'
import { getGroups, postGroup } from '../controllers/group.js'
import { getMessages, patchMessage } from '../controllers/message.js'

//localhost:5000/api
const router = express.Router();

//User
router.get('/user', getUsers);
router.post('/user', postUser);

//Group
router.get('/group', getGroups);
router.post('/group', postGroup);

//Message
router.get('/message/:groupId', getMessages);
router.patch('/message', patchMessage);

export default router;
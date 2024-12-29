import express from 'express';
import {getUsers,CreateUser,getUserBYid,deleteUser,updateUser} from '../controllers/users.js'
const router = express.Router();

router.get('/',getUsers);
router.post("/",CreateUser);
router.get("/:id",getUserBYid) 
router.delete('/:id',deleteUser)
router.patch('/:id',updateUser)

export default router;
import express, { Router } from 'express';
import {createPost,getAllPosts,getPost,updatePost,deletePost} from '../controllers/post-controller.js';

const router = express.Router();

router.post('/create', createPost);
router.get('/posts', getAllPosts);
router.get('/post/:id', getPost);
router.post('/update/:id', updatePost);
router.post('/delete/:id', deletePost);

export default router; 
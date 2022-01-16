import express, { Router } from 'express';
import {createPost,getAllPosts,getPost,updatePost,deletePost} from '../controllers/post-controller.js';
import {uploadImage,getImage} from '../controllers/image-controller.js';

import upload from '../utils/upload.js';

const router = express.Router();

router.post('/create', createPost);
router.get('/posts', getAllPosts);
router.get('/post/:id', getPost);
router.post('/update/:id', updatePost);
router.post('/delete/:id', deletePost);

router.post('/file/upload', upload.single('file') ,uploadImage);
router.get('/file/:filename',getImage);

export default router;   

import { response } from 'express';
import Post from '../schema/post-schema.js';

export const createPost = async (request, response) => {
    try {                 

        const post = await new Post(request.body);
        post.save();
        
        response.status(200).json('Blog saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const getAllPosts = async (request, response) => {
    let username = request.query.username;
    let category = request.query.category;
    let posts;
    try {         
        
        if(username!=undefined){
            posts = await Post.find({username:username});
        }else if(category!=undefined){
            posts = await Post.find({category:category});
        }else{
            posts = await Post.find({});
        }
        
        response.status(200).json(posts);
                
    } catch (error) {
        response.status(500).json(error);
    }
}

export const getPost = async (request,response) =>{
    try{
        let post = await Post.findById(request.params.id);
        response.status(200).json(post)
    }catch(error){
        response.status(500).json(error);
    }
}

export const updatePost = async (request,response) =>{
    try{        
        let post = await Post.findByIdAndUpdate(request.params.id,{ $set: request.body }); 
        response.status(200).json('Blog updated successfully.');    
    }catch(error){
        response.status(500).json(error);
    }
}

export const deletePost = async (request,response) =>{
    try{        
        let post = await Post.findById(request.params.id);
        await post.delete();

        response.status(200).json('Blog deleted successfully.');    
    }catch(error){
        response.status(500).json(error);
    }
}
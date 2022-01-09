import {Grid} from '@material-ui/core';
import Post from './Post';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllPosts } from '../../service/api';




const Posts = () =>{

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const fetchData  = async () =>{
            let data = await getAllPosts();
            setPosts(data);            
        }
        fetchData();
    },[]);
    
    return(        
        <>            
                {
                    posts.map(post=>(
                        <Grid container lg={3} sm={4} xs={12}>
                            <Link to={`/details/${post._id}`} style={{textDecoration:'none', color:' '}}>
                                <Post post={post}/>
                            </Link>
                        </Grid>
                    ))
                }                            
        </>
    )
}

export default Posts;
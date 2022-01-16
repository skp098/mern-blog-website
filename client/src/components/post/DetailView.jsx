import { Box, makeStyles, Typography } from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { getPost,deletePost } from '../../service/api';
import { useParams, useNavigate } from "react-router-dom";
import Notiflix from 'notiflix';


const useClasses = makeStyles((theme)=>({
    container:{
        padding: '0 100px',
        [theme.breakpoints.down('md')]:{
            padding:'15px'
        }
    },
    image:{
        width:'100%',
        height:'50vh',
        objectFit:'cover'
    },
    icons:{
        float:'right'
    },
    icon:{
        margin:'5px',
        border:'1px solid #171717',
        padding:'5px',
        borderRadius:'10px'
    },
    heading:{
        fontSize:'38px',
        fontWeight:'600',
        textAlign:'center',
        margin:'50px 0 10px 0px'
    },
    subheading:{
        color:'#878787',
        display:'flex',
        margin: '20px 0',
        [theme.breakpoints.down('md')]:{
            display:'block'
        }

    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }
}));

const DetailView = ({match}) => {
    const classes = useClasses();    
    
    const [post,setPost] = useState({});
    const params = useParams();
    
    const url = post.picture || "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

    const navigate = useNavigate();

    useEffect(()=>{
        const fetchData = async () =>{
            let data = await getPost(params.id);
            console.log(data);
            setPost(data);
        }
        fetchData();
    },[]);

    const deleteBlog = () => {
        Notiflix.Confirm.show(
            'Delete Post',
            'Are you sure you want to delete this post?',
            'Yes',
            'No',
            function okCb() {
              deletePost(params.id);
              navigate('/');
            },
            function cancelCb() {
              alert('If you say so...');
            },
            {
              width: '320px',
              borderRadius: '8px',
              // etc...
            },
          );        
    }

    return(
        
        <Box className={classes.container}>
            <img src={url} alt='banner' className={classes.image}/>
            <Box className={classes.icons}>
                <Link to={`/update/${post._id}`}><Edit className={classes.icon} color="primary"/></Link>
                <Delete onClick={(e) => { deleteBlog(e) }} className={classes.icon} color="error"/>
            </Box>
            <Typography className={classes.heading}>{post.title}</Typography>

            <Box className={classes.subheading}>
                <Link to={`/?username=${post.username}`} className={classes.link}>
                    <Typography>Author: <b>{post.username}</b></Typography>
                </Link>
                <Typography style={{marginLeft:'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
            </Box>

            <Box>
                <Typography>
                {post.description}
                </Typography>
            </Box>
        </Box>
    )
}

export default DetailView;

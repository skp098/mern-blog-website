import {Box, Typography,makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    container:{
        height:350,
        margin:10,
        borderRadius:10,
        border:'1px solid #d3cede',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        '& > *':{
            padding: '0 5px 5px 5px'
        }
    },
    image:{
        height:150,
        width:'100%',
        objectFit:'cover',
        borderRadius:'10px 10px 0px 0px',
    },
    text:{
        colot:'#878787',
        fontSize:12
    },
    heading:{
        fontSize:18,
        fontWeight:800
    },
    detail:{
        fontSize:14,
        wordBreak:'break-word'
    }
});

const Post = ({post}) =>{
    const url = post.picture || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    const Classes = useStyles();
    return(
        <Box className={Classes.container}>
            <img src={url} alt='wrapper' className={Classes.image} />
            <Typography className={Classes.text}>{post.categories}</Typography>
            <Typography className={Classes.heading}>{post.title}</Typography>
            <Typography className={Classes.text}>Author: {post.username}</Typography>
            <Typography className={Classes.detail}>{post.description.slice(0,100)}...</Typography>
        </Box>
    )
}

export default Post;
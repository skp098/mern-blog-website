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

const Post = () =>{
    const url = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    const Classes = useStyles();
    return(
        <Box className={Classes.container}>
            <img src={url} alt='wrapper' className={Classes.image} />
            <Typography className={Classes.text}>Music</Typography>
            <Typography className={Classes.heading}>Code for Interview</Typography>
            <Typography className={Classes.text}>Author: SantoshKp</Typography>
            <Typography className={Classes.detail}>My first well known react...</Typography>
        </Box>
    )
}

export default Post;
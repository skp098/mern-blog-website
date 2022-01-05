import { Box, makeStyles, Typography } from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';

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

    }
}));

const DetailView = () => {
    const classes = useClasses();
    const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
    return(
        
        <Box className={classes.container}>
            <img src={url} alt='banner' className={classes.image}/>
            <Box className={classes.icons}>
                <Edit className={classes.icon} color="primary"/>
                <Delete className={classes.icon} color="error"/>
            </Box>
            <Typography className={classes.heading}>Title of the blog</Typography>

            <Box className={classes.subheading}>
                <Typography>Author: <b>Santosh Kp</b></Typography>
                <Typography style={{marginLeft:'auto'}}>31 Dec, 2021</Typography>
            </Box>

            <Box>
                <Typography>
                Proin eget tortor risus. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta.

Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat.                    
                </Typography>
            </Box>
        </Box>
    )
}

export default DetailView;

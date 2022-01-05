import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    image:{
        background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
        width:'100%',
        height:'50vh',        
        alignItems:'center',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        '& :first-child':{
            fontSize:66,
            color:'#ffffff',
            lineHeight:1
        },
        '& :last-child':{
            fontSize:20,
            background:'#fff'

        }
    }
});


const Banner = () => {
    const classes = useStyles();
    const url = 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg';
    return(
        <Box className={classes.image}>
            <Typography>BLOG</Typography>
            <Typography>Code for Interview</Typography>
        </Box>        
    )
}


export default Banner;
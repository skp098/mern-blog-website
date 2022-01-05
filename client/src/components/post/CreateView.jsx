import { Box,makeStyles, FormControl, InputBase } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

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
    form:{
        display:'flex',
        flexDirection:'row',
        marginTop:'10px'
    },
    textField:{
        flex:1,
        margin:'0 30px'
    }
}));

const CreateView = () => {
    const classes = useClasses();
    const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
    return (
        <Box className={classes.container}>
            <img src={url} alt="Banner" className={classes.image}/>
            <FormControl className={classes.form}>
                <AddCircle fontSize='large' color='action'/>

                <InputBase placeholder='Enter Blog Title...' className={classes.textField}/>
            </FormControl>
        </Box>
    )
}

export default CreateView;
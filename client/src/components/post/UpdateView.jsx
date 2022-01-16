import { Box,makeStyles, FormControl, InputBase,Button, TextareaAutosize } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { getPost } from '../../service/api';
import { updatePost } from '../../service/api';
import { uploadFile } from '../../service/api';
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


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
        margin:'0 30px',
        fontSize:25,
    },
    textarea:{
        width:'100%',
        marginTop:50,
        border:'none',
        fontSize:18, 
        '&:focus-visible':{
            outline:'none',
        }
    }
}));

const initialValues = {
    title:'',
    description:'',
    picture:'',
    username:'SantoshKp',
    categories:'All',
    createdDate: new Date()
}


const UpdateView = () => {

    const classes = useClasses();
    

    const params = useParams();
    const [post, setPost] = useState(initialValues);
    const [file,setFile] = useState('');
    const [image,setImage] = useState('');
    
    const url = post.picture ? post.picture : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }       
    const navigate = useNavigate();

    const updateBlog = async () =>{
        await updatePost(params.id,post);
        console.log(post);
        navigate(`/details/${params.id}`);
    }

    useEffect(()=>{
        const getImage = async() =>{
            console.log(file);
            if(file){
                const formdata = new FormData(); 
                formdata.append("name",file.name);
                formdata.append("file",file);                
                const image = await uploadFile(formdata);                

                post.picture = image.data;                
                setImage(image.data); 
            }
        }
        getImage()
    },[file]);

    useEffect(()=>{
        const fetchData = async() =>{
            let data = await getPost(params.id);
            setPost(data);
            console.log(data);
        }
        fetchData();
    },[]);


    return (
        <Box className={classes.container}>
            <img src={url} alt="Banner" className={classes.image}/>
            <FormControl className={classes.form}>
            <label htmlFor="fileInput">
                    <AddCircle fontSize='large' color='action'/>
                </label>
                <input 
                type="file"
                id="fileInput"
                style={{display:'none'}}
                onChange={(e)=>{ setFile(e.target.files[0]) }}
                />

                <InputBase 
                    onChange={(e) => handleChange(e)} 
                    placeholder='Enter Blog Title...' 
                    className={classes.textField}
                    name='title'
                />                                

                <InputBase 
                onChange={(e)=>{handleChange(e)}}
                name="title"
                value={post.title} 
                placeholder='Enter Blog Title...' 
                className={classes.textField}/>
                
                <Button onClick={(e)=>updateBlog(e)} variant="contained" color="primary">Update</Button>                
            </FormControl>
            <TextareaAutosize 
            onChange={(e)=>{handleChange(e)}}
            name="description"
            value={post.description}
            rowsMin={5} 
            placeholder='Tell your story...' 
            className={classes.textarea}/>
        </Box>
    )
}

export default UpdateView;
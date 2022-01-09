import mongoose from 'mongoose';

const connection = async () =>{   
    try{
        const URL = "mongodb+srv://santoshkp:hello123@blogweb.d9o0i.mongodb.net/BlogWeb?retryWrites=true&w=majority";
        await mongoose.connect(URL,{useNewUrlParser:true, useUnifiedTopology:true});
        console.log("Database connected successfully");
    }catch(error){
        console.log("Error while connecting to MongoDB: ",error);
    }
} 

export default connection;
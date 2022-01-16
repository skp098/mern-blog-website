import grid from 'gridfs-stream';
import  mongoose  from 'mongoose';
const url = 'http://localhost:8000';

let gfs,gridfsBucket;
const conn = mongoose.connection;
// conn.once('open',()=>{
//     gfs = grid(conn.db, mongoose.mongo);
//     gfs.collection('fs');
// });
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'fs'
  });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');  
});
export const uploadImage = (request, response) =>{
    try{
        if(!request.file){
            return response.status(400).json("File not found!");
        }else{
            const imageURL = `${url}/file/${request.file.filename}`;
            response.status(200).json(imageURL);
        }
    }catch(error){
        response.status(500).json(error);
    }
}

export const getImage = async(request,response) =>{

    try{
        const file = await gfs.files.findOne({filename: request.params.filename});        
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(response); 
    }catch(error){
        response.status(500).json("Failed to fetch the image ",error);
    }
}

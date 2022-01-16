import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url:"mongodb+srv://santoshkp:hello123@blogweb.d9o0i.mongodb.net/BlogWeb?retryWrites=true&w=majority",
    options: {useUnifiedTopology:true, useNewUrlParser:true},
    file: (request, file)=>{
        const match = ["image/png","image/jpg"];
        if(match.indexOf(file.mimeType)==-1){
            return `${Date.now()}-blog-${file.originalname}`;
        }

        return {
            bucketname: "photos",
            filename:`${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage});
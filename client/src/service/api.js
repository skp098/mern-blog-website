import axios from 'axios';

const url = 'http://localhost:8000';  

export const createPost = (post) => {
    var config = {
        method: 'post',
        url: `${url}/create`,
        headers: { },
        data:post,
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const getAllPosts = async () =>{     

    try{
       
      let response = await axios.get(`${url}/posts`)
      return response.data;
      
    }catch(error){

    }
}

export const getPost = async (id) =>{
  try{
    let response = await axios.get(`${url}/post/${id}`);
    return response.data;
  }catch(error){
    console.log(error);
  }
}

export const updatePost = async (id,post) =>{
  var config = {
    method: 'post',
    url: `${url}/update/${id}`,
    headers: { },
    data:post,
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const deletePost = async (id) =>{
  var config = {
    method: 'post',
    url: `${url}/delete/${id}`,
    headers: { },    
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });  
}
import axios from 'axios';

// https://jsonplaceholder.typicode.com/posts
//https://5fc69e784931580016e3d2ad.mockapi.io/
const instance = axios.create({
  baseURL: 'https://5fdbf37e91f19e0017334d42.mockapi.io/postlayanblog/',
});

//GET POSTS
export const getPosts = () => {
  return axios.get('https://5fdbf37e91f19e0017334d42.mockapi.io/posts');
};

// GET POST BY ID
export const getPostById = (postId) => {

  return axios.get(`https://5fdbf37e91f19e0017334d42.mockapi.io/posts/${postId}`);
};


// GET USERS
export const getUsers = () => {
  return axios.get('https://5fdbf37e91f19e0017334d42.mockapi.io/users');
};

// GET USERS BY ID
export const getUserById = (userId) => {
  return axios.get(`https://5fdbf37e91f19e0017334d42.mockapi.io/users/${userId}`);
};

// GET COMMENT BY ID 
export const getCommentById = (postId, commentId) => {
  return instance.get(`/posts/${postId}/comments/${commentId}`);
};

// GET COMMENTS BY POST ID 
export const getCommentsByPostId = (postId) => {
  return axios.get(`https://5fdbf37e91f19e0017334d42.mockapi.io/posts/${postId}/comments`);
};


export const createNewPost = (post) => {
  return axios.post('https://5fdbf37e91f19e0017334d42.mockapi.io/posts', {
    title: post.title,
    image: post.image,
    body: post.body,
    password: post.password,
    user_id: post.user_id,
    author: post.author,
  })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error);
    });

  //return instance.post(`/posts`, post);
};


export const createNewUser = (user) => {
  console.log(user);
  instance.post('/users', {
    fullname: user.fullname,
    username: user.username,
    password: user.password,
    email: user.email,
    address: user.address,
  })
    .then(function (response) {
      console.log(response);
      console.log(user);
    })
    .catch(function (error) {
      console.log(error);
    });

  return instance.get(`/users/${user.id}`, user);
};


export const updateUser = (user) => {
  console.log(user);
  axios.put(`https://5fdbf37e91f19e0017334d42.mockapi.io/users/${user.id}`, {
    id: user.id,
    fullname: user.fullname,
    username: user.username,
    password: user.password,
    email: user.email,
    address: user.address

  }).then(function (response) {
    console.log(response)
  }).catch(function (error) {
    console.log(error);
  });
  return instance.get(`/users/${user.id}`, user);
}
export default instance;



//create comment 

export const createNewComment = (comment,postId) => {

  instance.post(`posts/${postId}/comments`, {
    author: comment.user_fullname,
    body: comment.body,
    user_id: comment.user_id
  })
    .then(function (response) {
      console.log(response);
      
    })
    .catch(function (error) {
      console.log(error);
    });
  
   return axios.get(`https://5fdbf37e91f19e0017334d42.mockapi.io/posts/${postId}/comments`);
};
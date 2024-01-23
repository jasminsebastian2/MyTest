export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    payload: posts,
  });
  
  export const addPost = (post) => ({
    type: 'ADD_POST',
    payload: post,
  });
  export const deletePost = (postId) => ({
    type: 'DELETE_POST',
    payload: postId,
  });
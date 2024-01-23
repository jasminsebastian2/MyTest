// PostList.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, Typography, Button, Divider, TextField, Grid } from '@mui/material';
import { deletePost } from '../redux/actions';
import useStyles from './styles';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [searchTerm, setSearchTerm] = useState('');
  const reversedPosts = [...posts].reverse();
  const filteredPosts = reversedPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const classes = useStyles();

  const handleDelete = (postId) => {
    // Dispatch the action to delete post from Redux store
    dispatch(deletePost(postId));

    try {
      // Retrieve existing posts from local storage
      const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];

      // Remove the deleted post from the array
      const updatedPosts = storedPosts.filter((post) => post.id !== postId);

      // Save the updated posts to local storage
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
    } catch (error) {
      console.error('Error deleting from local storage:', error);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          Recent Posts
        </Typography>
        <TextField
          label="Search Posts"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Grid>
      {filteredPosts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <Card className={classes.postCard}>
            <CardContent>
              <Typography variant="h6">{post.title}</Typography>
              <Divider className={classes.divider} />
              <Typography variant="body2" color="textSecondary" className={classes.postBody}>
                {post.body}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              color="secondary"
              className={classes.deleteButton}
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;
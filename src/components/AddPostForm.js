import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions';
import { TextField, Button, Grid } from '@mui/material';
import useStyles from './styles';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, body, userId: 1, id: Date.now() };

    dispatch(addPost(newPost));

    try {
      const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
      const updatedPosts = [newPost, ...storedPosts];

      localStorage.setItem('posts', JSON.stringify(updatedPosts));

      setTitle('');
      setBody('');
    } catch (error) {
      console.error('Error saving to local storage:', error);
    }
  };

  return (
    <div className={classes.addPostForm}>
      <h4>Create a Post</h4>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ marginBottom: '15px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="What's in your mind..."
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              style={{ marginBottom: '15px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.addPostButton}
            >
              Post
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddPostForm;

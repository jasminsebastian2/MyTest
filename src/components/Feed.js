import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPosts } from '../redux/actions';
import PostList from './PostList';
import AddPostForm from './AddPostForm';
import { Grid } from '@mui/material';
import useStyles from './styles';
import { fetchPosts } from '../services/api'; 

const Feed = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const apiPosts = await fetchPosts();
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        if (storedPosts.length === 0) {
          localStorage.setItem('posts', JSON.stringify(apiPosts));
          dispatch(setPosts(apiPosts));
        } else {
          dispatch(setPosts(storedPosts));
        }
      } catch (error) {
        console.error('Error loading or fetching posts:', error);
      }
    };

    getPosts();
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <AddPostForm />
          <PostList />
        </Grid>
      </Grid>
    </div>
  );
};

export default Feed;

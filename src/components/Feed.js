// Feed.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../redux/actions';
import PostList from './PostList';
import AddPostForm from './AddPostForm';
import { Grid } from '@mui/material';
import useStyles from './styles';

const Feed = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  useEffect(() => {
    const getPosts = async () => {
      if (posts.length === 0) {
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        dispatch(setPosts(storedPosts));
      } else {
        localStorage.setItem('posts', JSON.stringify(posts));
      }
    };

    getPosts();
  }, [dispatch, posts]);

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

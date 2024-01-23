import React from 'react';
import Feed from './components/Feed';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography variant="h5" align="center">
          Feeds
        </Typography>
        <Feed />
      </Container>
    </div>
  );
}

export default App;

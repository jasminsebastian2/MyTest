import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '24px',
  },
  postCard: {
    marginBottom: '24px',
    position: 'relative',
    '&:hover $deleteButton': {
      opacity: 1,
    },
  },

  deleteButton: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  addPostForm: {
    marginTop: '24px',
    marginBottom: '16px',
  },
  addPostButton: {
    marginTop: '16px',
  },
}));

export default useStyles;
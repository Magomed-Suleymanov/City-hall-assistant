import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FormInput from './FormInput';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  modalAuth: {
    position: 'absolute',
    top: '70px',
    boxShadow: '0px 0px 10px 0px rgb(0 0 0)',
    borderRadius: '5px',
    left: 'calc(50% - (444px / 2))',
    zIndex: 210,
    backgroundColor: 'white',
  },

  paper: {
    marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
  },
}));

function Login() {
  const classes = useStyles();

  return (
    <Box>
      <Link to='/home'>
      <Box
        position="absolute"
        width="100%"
        zIndex="170"
        height="100%"
        style={{ opacity: 0.2, background: 'whitesmoke' }} />
      </Link>
    <Container component="main" className={classes.modalAuth} maxWidth="xs">
      <Box className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Войти
        </Typography>
        <FormInput />
      </Box>
      <Box mt={3}></Box>
    </Container>
    </Box>
  );
}

export default Login;

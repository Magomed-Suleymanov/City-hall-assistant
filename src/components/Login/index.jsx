import React from 'react';
import Box from '@material-ui/core/Box';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import FormInput from './FormInput';
import { Link } from 'react-router-dom';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import { deleteModalAuth } from '../../redux/actions/auth'

function Login() {
  const dispatch = useDispatch();
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
    exitAuth: {
      position: 'absolute',
      padding: '8px 12px',
      color: 'black',
      top: '6px',
      right: '6px',
      cursor: 'pointer',

      '&:active': {
        color: 'red',
      },
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
  const classes = useStyles();

  return (
    <Container component="main" className={classes.modalAuth} maxWidth="xs">
      <Box className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <FormInput />
      </Box>
      <Box mt={5}></Box>
      <Box
        className={classes.exitAuth}
        onClick={() => dispatch(deleteModalAuth())}
      >
        <Link to="/home">
          <ClearOutlinedIcon fontSize="large" />
        </Link>
      </Box>
    </Container>
  );
}

export default Login;

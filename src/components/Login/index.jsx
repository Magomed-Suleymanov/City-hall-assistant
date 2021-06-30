import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import FormInput from './FormInput';
import { Link } from 'react-router-dom';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';

function Login() {
  const useStyles = makeStyles((theme) => ({
    modalAuth: {

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
            Войти
          </Typography>
          <FormInput />
        </Box>
        <Box mt={3}></Box>
      </Container>
  );
}

export default Login;

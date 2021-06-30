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
      position: 'absolute',
      top: '70px',
      boxShadow: '0px 0px 4px 0px rgb(0 0 0)',
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
      backgroundColor: theme.palette.secondary.main,
    },
  }));
  const classes = useStyles();

  return (
    <Box>
      <Box
        position="absolute"
        zIndex="201"
        width="100%"
        height="100%"
        style={{ opacity: 0.2, backgroundColor: 'whitesmoke' }}
      ></Box>
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
        <Box className={classes.exitAuth}>
          <Link to="/home">
            <ClearOutlinedIcon fontSize="large" />
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Login;

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormInput from './FormInput';
import './style.css';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import { useDispatch } from 'react-redux';
import { deleteModalAuth } from '../../redux/ducks/auth';
import {Link} from "react-router-dom";

function Authorization(props) {
  const dispatch = useDispatch();

  const useStyles = makeStyles((theme) => ({
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
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();

  return (
    <Box className="wrapModalAuth">
      <Box className="windowDeact"></Box>
      <Container component="main" className="modalAuth" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
             Вход
          </Typography>
          <FormInput />
        </div>
        <Box>
          <Link to={'/signUp'}>У вас еще нет акаунта? Зарегистрируйтесь.</Link>
        </Box>
        <Box className="exitAuth" onClick={() => dispatch(deleteModalAuth())}>
          <Link to="/home"><ClearOutlinedIcon fontSize={'large'} /></Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Authorization;

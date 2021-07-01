import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GridItem from './GridItem';

function Registration() {
  const useStyles = makeStyles((theme) => ({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      maxWidth: '444px',
      left: 'calc(50% - 444px / 2)',
      position: 'absolute',
      zIndex: '220',
      top: '70px',
      borderRadius: '5px',
    },
    avatar: {
      marginTop: theme.spacing(12),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '90%', // Fix IE 11 issue.
      margin: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
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
  }));
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        <form className={classes.form} noValidate>
          <GridItem />
        </form>
      </Box>
    </Box>
  );
}

export default Registration;

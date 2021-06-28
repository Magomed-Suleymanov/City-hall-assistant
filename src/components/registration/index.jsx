import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GridItem from './GridItem';

export default function Registration() {
  const useStyles = makeStyles((theme) => ({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      maxWidth: '500px',
      left: 'calc(50% - 250px)',
      position: 'absolute',
      zIndex: '220',
      top: '70px',
      boxShadow: '0px 0px 10px 0px rgb(0 0 0)',
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
      <Box
        position="absolute"
        zIndex="201"
        width="100%"
        height="100%"
        style={{ opacity: 0.2, backgroundColor: 'whitesmoke' }}
      ></Box>
      <Box className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
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

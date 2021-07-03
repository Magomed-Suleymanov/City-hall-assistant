import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GridItem from './GridItem';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    backgroundColor: 'white',
    maxWidth: '444px',
    left: 'calc(50% - 222px)',
    zIndex: '220',
    position: 'absolute',
    top: '70px',
    borderRadius: '5px',
    boxShadow: '0px 0px 5px 0px rgb(0 0 0)',
  },
  avatar: {
    marginTop: theme.spacing(7),
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

export default function Registration() {
  const classes = useStyles();

  return (
    <Box>
      <Link to="/home">
        <Box
          position="absolute"
          width="100%"
          zIndex="170"
          height="100%"
          style={{ opacity: 0.9, background: 'black' }}
        />
      </Link>
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

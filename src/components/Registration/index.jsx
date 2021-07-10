import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link, NavLink, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { startRegistration } from '../../redux/actions/authReducer';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    maxWidth: '700px',
    height: '550px',
    left: 'calc(50% - 350px)',
    zIndex: '220',
    position: 'absolute',
    top: '10%',
    borderRadius: '5px',
    boxShadow: '0px 0px 5px 0px rgb(0 0 0)',
  },
  avatar: {
    marginTop: theme.spacing(8),
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
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  },
}));

export default function Registration() {
  const classes = useStyles();

  const loading = useSelector((state) => state.authReducer.loadingRegistration);
  const error = useSelector((state) => state.authReducer.error);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  let history = useHistory();

  const handleReg = (e) => {
    e.preventDefault();
    dispatch(startRegistration(firstName, lastName, email, login, password));
    history.push('/home');
  };

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
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Имя"
                autoFocus
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Фамилия"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="login"
                label="Почта"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="login"
                label="Логин"
                name="login"
                autoComplete="login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>

          {error ? <Alert severity="error">Введите верные данные</Alert> : ''}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleReg}
            disabled={loading}
          >
            Зарегистрироваться
          </Button>

          <NavLink to="/auth/login" variant="body2">
            У вас уже есть аккаунт? Войдите в него
          </NavLink>
        </form>
      </Box>
    </Box>
  );
}

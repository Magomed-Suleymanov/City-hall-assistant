import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Alert } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from '../../redux/actions/auth';

const useStyles = makeStyles((theme) => ({
  modalAuth: {
    position: 'absolute',
    top: '10%',
    maxWidth: '700px',
    left: 'calc(50% - 350px)',
    zIndex: '220',
    background: 'white',
    borderRadius: '5px',
    boxShadow: '0px 0px 5px 0px rgb(0 0 0)',
  },

  paper: {
    marginTop: theme.spacing(7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    margin: theme.spacing(0, 0, 2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const error = useSelector((state) => state.authReducer.error);
  const loading = useSelector((state) => state.authReducer.loadingLogin);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  let history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(login, password));
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
          style={{ opacity: 0.8, background: 'black' }}
        />
      </Link>
      <Container component="main" className={classes.modalAuth} maxWidth="xs">
        <Box className={classes.paper}>
          <Avatar className={classes.avatar} />
          <Typography component="h1" variant="h5">
            Войти
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Login"
              name="email"
              autoComplete="email"
              autoFocus
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <Alert severity="error">Неверный логин или пароль</Alert>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleLogin}
              disabled={loading}
            >
              Войти
            </Button>
            <NavLink to="/registration">Вы не зарегистрированы?</NavLink>
          </form>
        </Box>
      </Container>
    </Box>
  );
}

export default Login;

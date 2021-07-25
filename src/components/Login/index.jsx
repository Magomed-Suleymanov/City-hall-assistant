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
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

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
  const error = useSelector((state) => state.auth.error);
  const loading = useSelector((state) => state.auth.loadingLogin);

  const classes = useStyles();
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    return setShowPassword(!showPassword);
  };

  let history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(login, password, history));
  };

  return (
    <Box>
      <Link to="/">
        <Box
          position="absolute"
          width="100%"
          zIndex="220"
          height="100%"
          style={{ opacity: 0.9, background: 'black' }}
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
              style={{ marginBottom: '15px' }}
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Логин"
              name="email"
              autoComplete="email"
              autoFocus
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <FormControl
              fullWidth
              variant="outlined"
              style={{ marginBottom: '15px' }}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Пароль
              </InputLabel>
              <OutlinedInput
                label="Password"
                autoFocus
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
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

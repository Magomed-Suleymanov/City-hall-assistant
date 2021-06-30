import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import {loginStart} from "../../redux/actions/auth";

function FormInput(props) {
  const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%',
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();
  const dispatch = useDispatch()

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    dispatch(loginStart(login, password))
  }
  return (
    <Box>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
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
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleLogin}
        >
          Войти
        </Button>
        <NavLink to="/registration">Вы не зарегистрированы?</NavLink>
      </form>
    </Box>
  );
}

export default FormInput;

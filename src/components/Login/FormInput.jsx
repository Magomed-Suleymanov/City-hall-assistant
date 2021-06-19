import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import Box from "@material-ui/core/Box";

function FormInput(props) {
  const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();

  const dispatch = useDispatch();
  const error = useSelector(state => state.users.errorMessage)
  const users = useSelector(state => state.users.items)


  const [login, setLogin] = useState(users.login)
  const [pass, setPass] = useState(users.password)

  const handleClick = () => {
  }

  return (
    <div>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={login}
          onChange={e => setLogin(e.target.value)}
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
          value={pass}
          onChange={e => setPass(e.target.value)}
        />
        {error && (
            <Box color="error.main">
              Неверный логин или пароль
            </Box>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleClick}
        >
          Войти
        </Button>
      </form>
    </div>
  );
}

export default FormInput;

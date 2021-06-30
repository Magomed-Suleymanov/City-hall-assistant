import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Registration } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';

function ButtonRegistration({ login, password }) {
  const dispatch = useDispatch();
  const useStyles = makeStyles((theme) => ({
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

  const handleClick = () => {
    dispatch(Registration(login, password));
  };

  return (
    <Box>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleClick}
      >
        Зарегистрироваться
      </Button>
      <NavLink to="/auth" variant="body2">
        У вас уже есть аккаунт? Войдите в него
      </NavLink>
      <Box className={classes.exitAuth}>
        <NavLink to="/home">
          <ClearOutlinedIcon fontSize="large" />
        </NavLink>
      </Box>
    </Box>
  );
}

export default ButtonRegistration;

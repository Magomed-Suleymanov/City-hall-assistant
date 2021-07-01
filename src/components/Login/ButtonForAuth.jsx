import { NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch, useSelector } from 'react-redux';

function ButtonForAuth() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const useStyle = makeStyles({
    button: {
      background: 'white',
      borderRadius: '8px',
      position: 'absolute',
      zIndex: '2',
      right: '20px',
      top: '22px',
    },
  });
  const classes = useStyle();


  return (
    <Box>
      {!token ? (
        <Box>
          <NavLink to="/auth">
            <Button
              variant="outlined"
              color="primary"
              size="medium"
              startIcon={<ExitToAppIcon />}
              className={classes.button}
            >
              Войти
            </Button>
          </NavLink>
        </Box>
      ) : (
        <Button
          variant="outlined"
          color="primary"
          size="medium"
          startIcon={<ExitToAppIcon />}
          className={classes.button}
        >
          Выйти
        </Button>
      )}{' '}
    </Box>
  );
}

export default ButtonForAuth;

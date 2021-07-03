import { NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch, useSelector } from 'react-redux';
import { authReset } from '../../redux/actions/authReducer';

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

function ButtonForAuth() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const classes = useStyle();

  const handleClick = () => {
    dispatch(authReset());
  };

  return (
    <Box>
      {!user.token ? (
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
        <Box>
          <Button
            variant="outlined"
            color="primary"
            size="medium"
            startIcon={<ExitToAppIcon />}
            className={classes.button}
            onClick={handleClick}
          >
            Выйти
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default ButtonForAuth;

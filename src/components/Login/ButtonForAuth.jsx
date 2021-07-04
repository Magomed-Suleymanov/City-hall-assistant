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
    width: "93px",
    height: "40px",
    borderRadius: '200px',
    textTransform: 'none',
    boxShadow: "0 1px 3px 0 rgb(38 38 38 / 50%)",
    position: 'absolute',
    padding: 'none',
    zIndex: '2',
    right: '60px',
    top: '18px',
    fontSize: "14px",
    lineHeight: '16px',
    fontWeight: "800",

    "&:hover": {
      background: "white",
      color: '#747474'
    }
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
            {user.firstName}
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default ButtonForAuth;

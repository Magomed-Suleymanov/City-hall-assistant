import { NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function ButtonForAuth() {
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
    <NavLink to="/auth">
      <Box>
        <Button
          variant="outlined"
          color="primary"
          size="medium"
          startIcon={<ExitToAppIcon />}
          className={classes.button}
        >
          Войти
        </Button>
      </Box>
    </NavLink>
  );
}

export default ButtonForAuth;

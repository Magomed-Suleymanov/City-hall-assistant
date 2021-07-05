import { NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch, useSelector } from 'react-redux';
import { authReset } from '../../redux/actions/authReducer';
import Avatar from "@material-ui/core/Avatar";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useState} from "react";
import {IconButton, List, ListItem, Popover} from "@material-ui/core";
import {AccountCircle, ExitToApp} from "@material-ui/icons";

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

  avatar: {
    width: '50px',
    height: '50px',
    zIndex: '100',
    position: 'absolute',
    right: '60px',
    top: '18px',
    cursor: 'pointer',
    transition: '0.5s',

    '&:hover': {
      boxShadow: '0px 0px 2px 15px rgba(112, 112, 112, 0.1)'
    },
    '&:active': {
      boxShadow: '0px 0px 2px 15px rgba(71, 71, 71, 0.3)',
      transition: '0.5s'
    }
  },
  root: {
    width: 200,
  },
  icon: {
    width: "15px",
  },
  text: {
    fontSize: "16px",

    '&:hover': {
      color: 'black',
    }
  },

});

function ButtonForAuth() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const classes = useStyle();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(authReset());
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : false

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
          <Avatar
              className={classes.avatar}
              src="/broken-image.jpg"
              aria-controls='simple-menu'
              aria-haspopup="true"
              onClick={handleClick}
          />

          <IconButton onClick={handleClick}>
            <Avatar />
          </IconButton>
          <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              style={{marginTop: '5px'}}
          >
            <List component="nav" className={classes.root}>
                <ListItem button>
                  <ListItemIcon className={classes.icon}>
                    <AccountCircle />
                  </ListItemIcon>
                  <ListItemText secondary="Профиль" className={classes.text} />
                </ListItem>
              <ListItem button onClick={handleLogout}>
                <ListItemIcon className={classes.icon}>
                  <ExitToApp />
                </ListItemIcon>
                <ListItemText secondary="Выход" className={classes.text} />
              </ListItem>
            </List>
          </Popover>

        </Box>
      )}
    </Box>
  );
}

export default ButtonForAuth;

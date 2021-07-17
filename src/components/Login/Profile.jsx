import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';

const useStyles = makeStyles({
  avatar: {
    position: 'relative',
    width: '100%',
    height: '70px',
    padding: '15px',
    boxSizing: 'border-box',
    background: '#EAEAEA',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
  },

  orange: {
    color: 'white',
    backgroundColor: 'orange',
    width: '50px',
    height: '50px',
    margin: '',
    fontSize: '25px',
  },

  name: {
    fontSize: '21px',
    position: 'absolute',
    left: '80px',
    top: '10px',
  },

  role: {
    position: 'absolute',
    bottom: '10px',
    left: '80px',
    fontSize: '13px',
    color: '#A8A8A8',
  },
});

function Profile() {
  const user = useSelector((state) => state.auth.user);
  const classes = useStyles();

  return (
    <Box style={{ width: '100%', padding: '15px', boxSizing: 'border-box' }}>
      <Box className={classes.avatar}>
        <Avatar className={classes.orange}>{user.firstName[0]}</Avatar>
        <Box className={classes.name}>
          {user.firstName} {user.lastName}
        </Box>
        <Box className={classes.role}>{user.roles}</Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        fontSize="14px"
        marginBottom="10px"
      >
        <EmailIcon style={{ marginRight: '10px' }} color="disabled" />
        {user.email}
      </Box>
      <Box display="flex" alignItems="center" fontSize="14px">
        <RoomIcon style={{ marginRight: '10px' }} color="disabled" />
        {user.address}
      </Box>
    </Box>
  );
}

export default Profile;

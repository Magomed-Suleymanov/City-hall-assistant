import React from 'react';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { deleteAppeals } from '../../../redux/actions/appeals';

const useStyle = makeStyles(() => ({
  inputModal: {
    width: '97.5%',
    padding: '12px 5px',
    fontSize: '16px',
    color: 'black',
    border: '1px solid lightgray',
    outline: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  blockWishes: {
    height: '170px',
    overflowY: 'scroll',
    padding: '15px 10px',
    fontSize: '16px',
    marginBottom: '12px',
    color: 'black',
    background: '#fdfcf9',
    borderRadius: '2px',
    boxShadow: '0px 0px 5px inset rgb(193, 193, 193)',
  },
  buttonAppeals: {
    width: '100%',
  },
  deleteAppeal: {
    cursor: 'pointer',

    '&:hover': {
      color: 'red',
    },
  },
}));

function Appeal({ item, user }) {
  const classes = useStyle();
  const dispatch = useDispatch();

  const handleDeleteAppeals = () => {
    dispatch(deleteAppeals(item.id));
  };

  return (
    <Box
      key={item.id}
      justifyContent="space-between"
      display="flex"
      alignItems="center"
    >
      <Box>{item.appeal}</Box>

      {user.status === 'Администратор' ? (
        <Box className={classes.deleteAppeal} onClick={handleDeleteAppeals}>
          <DeleteIcon />
        </Box>
      ) : (
        ''
      )}
    </Box>
  );
}

export default Appeal;
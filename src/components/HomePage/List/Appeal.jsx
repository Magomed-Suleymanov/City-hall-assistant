import React from 'react';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import DoneIcon from '@material-ui/icons/Done';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { changeOfStatus, deleteAppeals } from '../../../redux/actions/appeals';
import Button from '@material-ui/core/Button';
import Appraisals from './Appraisals';

const useStyle = makeStyles(() => ({
  deleteAppeal: {
    cursor: 'pointer',

    '&:hover': {
      color: 'red',
      background: 'whitesmoke',
    },
  },
  changeAppeal: {
    cursor: 'pointer',

    '&:hover': {
      background: 'whitesmoke',
    },
  },
}));

function Appeal({ item }) {
  const classes = useStyle();
  const dispatch = useDispatch();

  const handleDeleteAppeals = () => {
    dispatch(deleteAppeals(item.id));
  };
  const user = useSelector((state) => state.authReducer.user);

  const handleChangeOfStatus = () => {
    let status = 'Выполнено';
    dispatch(changeOfStatus(item.id, status));
  };

  return (
    <Box
      key={item.id}
      justifyContent="space-between"
      display="flex"
      alignItems="center"
    >
      <Box marginBottom="10px">
        <Box marginBottom="5px" width={'500px'}>
          {item.appeal}
        </Box>
        <Appraisals item={item} />
      </Box>
      {user.roles === 'Администратор' ? (
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {item.status === 'Выполняется' ? (
            <Box
              className={classes.changeAppeal}
              style={{ color: 'blue' }}
              onClick={handleChangeOfStatus}
            >
              <Button color={'secondary'} endIcon={<DoneIcon />}>
                {item.status}
              </Button>
            </Box>
          ) : (
            <Box className={classes.changeAppeal} style={{ color: 'green' }}>
              <Button color={'primary'} endIcon={<DoneAllIcon />}>
                {item.status}
              </Button>
            </Box>
          )}

          <Box className={classes.deleteAppeal} onClick={handleDeleteAppeals}>
            <DeleteIcon />
          </Box>
        </Box>
      ) : (
        <Box display="flex" alignItems="center">
          {item.status === 'Выполняется' ? (
            <Box style={{ color: 'blue' }}>
              <DoneIcon />
            </Box>
          ) : (
            <Box style={{ color: 'green' }}>
              <DoneAllIcon />
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}

export default Appeal;

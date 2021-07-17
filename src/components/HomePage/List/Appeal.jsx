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
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

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
    <Grid container key={item.id}>
      <Box marginBottom="10px">
        <Box marginBottom="5px" width={'500px'} title={item.date}>
          {item.appeal}
          <Box
            textAlign="center"
            width={'55px'}
            fontSize="10px"
            style={{ background: 'lightgray', borderRadius: '3px' }}
          >
            {item.date}
          </Box>
        </Box>
        <Box display="flex">
          <Appraisals item={item} />
        </Box>
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
    </Grid>
  );
}

Appeal.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Appeal;

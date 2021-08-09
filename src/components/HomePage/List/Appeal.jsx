import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
  changeOfStatus,
  deleteAppeals,
  loadingAppeals,
} from '../../../redux/actions/appeals';
import Button from '@material-ui/core/Button';
import Appraisals from './Appraisals';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import DoneIcon from '@material-ui/icons/Done';
import DoneAllIcon from '@material-ui/icons/DoneAll';

import Dialog from '@material-ui/core/Dialog';

const useStyle = makeStyles(() => ({
  deleteAppeal: {
    display: 'flex',
    cursor: 'pointer',
    height: '34px',
    alignItems: 'center',

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
  select: {
    margin: '20px',
    borderRadius: '5px',
    width: '250px',
    fontSize: '16px',
    padding: '5px',
    border: '1px solid gray',
  },
  buttonSelect: {
    width: '130px',
    marginRight: '10px',
  },
}));

function Appeal({ item }) {
  const user = useSelector((state) => state.auth.user);

  const classes = useStyle();
  const dispatch = useDispatch();

  const handleDeleteAppeals = () => {
    dispatch(deleteAppeals(item.id));
  };

  const [target, setTarget] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleChangeOfStatus = (e) => {
    dispatch(changeOfStatus(item.id, target));
    handleClose();
    dispatch(loadingAppeals());
  };

  const Process = () => {
    if (item.status === 'Выполнено') {
      return (
        <Box>
          <DoneAllIcon color={'primary'} />
        </Box>
      );
    } else if (item.status === 'Выполняется') {
      return (
        <Box>
          <DoneIcon color={'secondary'} />
        </Box>
      );
    } else {
      return (
        <Box>
          <DoneIcon />
        </Box>
      );
    }
  };

  const Status = () => {
    if (item.status === 'Выполнено') {
      return (
        <Button
          className={classes.buttonSelect}
          color="primary"
          variant="text"
          onClick={handleClickOpen}
        >
          {item.status}
        </Button>
      );
    } else if (item.status === 'Выполняется') {
      return (
        <Button
          className={classes.buttonSelect}
          color="secondary"
          variant="text"
          onClick={handleClickOpen}
        >
          {item.status}
        </Button>
      );
    } else {
      return (
        <Button
          className={classes.buttonSelect}
          variant="text"
          onClick={handleClickOpen}
        >
          {item.status}
        </Button>
      );
    }
  };

  return (
    <Grid container key={item.id}>
      <Box marginBottom="10px">
        <Box marginBottom={'5px'} width={'450px'} title={item.date}>
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
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Box>{Status}</Box>
            <Dialog
              selectedvalue={selectedValue}
              open={open}
              onClose={handleClose}
            >
              <Box
                textAlign="center"
                alignItems="center"
                height="170px"
                width="300px"
              >
                <Box marginTop="18px" fontSize="20px" fontWeight={500}>
                  Изменить статус пожелания
                </Box>
                <select
                  defaultValue={'DEFAULT'}
                  className={classes.select}
                  onChange={(e) => setTarget(e.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Выберите статус
                  </option>
                  <option color={'primary'} value={'Рассмотрение'}>
                    Рассмотрение
                  </option>
                  <option value={'Выполняется'}>Выполняется</option>
                  <option value={'Выполнено'}>Выполнено</option>
                </select>
                <Box>
                  <Button
                    color={'secondary'}
                    variant={'contained'}
                    onClick={handleChangeOfStatus}
                  >
                    Добавить
                  </Button>
                </Box>
              </Box>
            </Dialog>
          </Box>
          <Box className={classes.deleteAppeal} onClick={handleDeleteAppeals}>
            <DeleteIcon />
          </Box>
        </Box>
      ) : (
        <Box>{Process}</Box>
      )}
    </Grid>
  );
}

Appeal.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Appeal;

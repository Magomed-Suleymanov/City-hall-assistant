import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useDispatch } from 'react-redux'
import { deleteStreet } from '../../../redux/actions/application'
import DeleteIcon from '@material-ui/icons/Delete'

function DeleteStreets({ streetId }) {
  const dispatch = useDispatch();
  const handleClickDelete = () => {
    dispatch(deleteStreet(streetId))
  }

  return (
    <Box>
      <Button endIcon={<DeleteIcon />} onClick={handleClickDelete} color={'primary'} variant={'outlined'}>
        Удалить
      </Button>
    </Box>
  );
}

export default DeleteStreets;

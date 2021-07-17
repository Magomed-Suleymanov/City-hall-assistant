import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStreet } from '../../../redux/actions/application';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

function DeleteStreets({ streetId }) {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleClickDelete = () => {
    dispatch(deleteStreet(streetId));
  };

  return (
    <Box>
      {user.roles === 'Администратор' ? (
        <Button
          endIcon={<DeleteIcon />}
          onClick={handleClickDelete}
          color={'secondary'}
          variant={'outlined'}
        >
          Удалить
        </Button>
      ) : (
        ''
      )}
    </Box>
  );
}

DeleteStreets.propTypes = {
  streetId: PropTypes.number.isRequired,
};

export default DeleteStreets;

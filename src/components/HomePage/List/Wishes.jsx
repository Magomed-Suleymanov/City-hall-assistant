import React from 'react';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

function Wishes(props) {
  const modalListItems = useSelector(
    (state) => state.application.modalListItems,
  );
  const useStyle = makeStyles(() => ({
    inputModal: {
      width: '99.3%',
      padding: '10px 0',
      margin: '20px 0',
      fontSize: '14px',
      color: 'gray',
      border: '1px solid gray',
      borderRadius: '3px',
      outline: 'none',
      cursor: 'pointer',
    },
  }));
  const classes = useStyle();
  return (
    <Box>
      <Box padding="10px 0" fontSize="20px" textAlign="center">
        Пожелания или замечания:
      </Box>
      <Box padding="6px 0" fontSize="18px">
        {modalListItems.wish}
      </Box>
      <Box>
        <input
          className={classes.inputModal}
          placeholder="Введите пожелания или замечания"
        />
      </Box>
    </Box>
  );
}

export default Wishes;

import React from 'react';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(() => ({
  inputModal: {
    width: '96.3%',
    padding: '10px',
    fontSize: '14px',
    color: 'gray',
    border: '1px solid lightgray',
    borderRadius: '3px',
    outline: 'none',
    cursor: 'pointer',
  },
  blockWishes: {
    padding: '15px 10px',
    fontSize: '16px',
    marginBottom: '15px',
    color: 'black',
    background: '#f3f3f3',
    borderRadius: '2px',
    boxShadow: '0px 0px 5px inset rgb(193, 193, 193)',
  },
}));

function Appeals() {
  const modalListItems = useSelector(
    (state) => state.application.modalListItems,
  );

  const classes = useStyle();
  return (
    <Box padding="0px 2px 8px 2px">
      <Box
        padding="10px 0 5px"
        fontSize="18px"
        color="black"
        textAlign="center"
      >
        Пожелания или замечания:
      </Box>
      <Box className={classes.blockWishes}>{}</Box>
      <Box>
        <input
          className={classes.inputModal}
          placeholder="Введите пожелания или замечания"
        />
      </Box>
    </Box>
  );
}

export default Appeals;

import React, { useState } from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'

const useStyle = makeStyles(() => ({
  inputModal: {
    width: '97%',
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
  }
}));

function Appeals() {
  const dispatch = useDispatch();
  const appeals = useSelector((state) => state.appeals.appeals);


  const modalListItems = useSelector(
    (state) => state.application.modalListItems,
  );

  // const handleAddText = () => {
  //   dispatch(AddAppeals(text));
  //   setText('');
  // }
  // const modalListItems = useSelector(
  //   (state) => state.application.modalListItems,
  // );
  // const appeals = useSelector((state) => state.appeals.appeals);


  const classes = useStyle();

  const [values, setValues] = useState({

  });

  return (
    <Box width='500px' padding="0px 2px 2px 2px">
      <Box
        padding="4px 0 10px 0px"
        fontSize="18px"
        color="black"
        textAlign="center"
      >
        Пожелания или замечания:
      </Box>
      <Box className={classes.blockWishes}>
        {appeals.map(item => {
          if (item.id === modalListItems.id) {
            return <div>{item.appeal}</div>
          } return ''
        })}
      </Box>
      <Box>
        <input
          value={''}
          className={classes.inputModal}
          placeholder="Введите пожелания или замечания"
          onChange={(e) => (e.target.value)}
        />
      </Box>
      <Box padding="12px 0px 0px 0px ">
        <Button className={classes.buttonAppeals} onClick={'handleAddText'} variant="outlined" color="primary">
          Добавить
        </Button>
      </Box>
    </Box>
  );
}

export default Appeals;

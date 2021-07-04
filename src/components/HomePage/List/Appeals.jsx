import React, { useState } from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux'
import { AddAppeals } from '../../../redux/actions/application'
import Button from '@material-ui/core/Button'

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
    height: '70px',
    overflowY: 'scroll',
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
  const dispatch = useDispatch();
  const handleAddText = (e) => {
    dispatch(AddAppeals(text))
  }
  const modalListItems = useSelector(
    (state) => state.application.modalListItems,
  );
  const appeals = useSelector((state) => state.application.appeals);
  const classes = useStyle();
  const [text, setText] = useState('');

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
      <Box className={classes.blockWishes}>
      {
        appeals.map(item => {
          if (item.streetId === modalListItems.id) {
            return <Box>{item.appeal}</Box>
          } return '';
        })
      }
      </Box>
      <Box>
        <input
          value={text}
          className={classes.inputModal}
          placeholder="Введите пожелания или замечания"
          onChange={(e) => setText(e.target.value)}
        />
      </Box>
      <Box padding="0px 2px 3px 2px ">
        <Button onClick={handleAddText} variant="outlined" color="primary">
          Добавить
        </Button>
      </Box>
    </Box>
  );
}

export default Appeals;

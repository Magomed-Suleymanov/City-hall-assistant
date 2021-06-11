import React from 'react';
import Box from '@material-ui/core/Box';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { deactModalList } from '../../../redux/ducks/application';

function ModalItemsList(props) {
  const dispatch = useDispatch();
  const modalListItems = useSelector(
    (state) => state.application.modalListItems,
  );
  const useStyle = makeStyles(() => ({
    wrapModalList: {
      width: '600px',
      padding: '20px',
      background: 'white',
      boxShadow: '0px 0px 15px rgb(0, 0, 0)',
      position: 'absolute',
      left: 'calc(50% - 300px)',
      top: '8%',
      zIndex: 170,
      borderRadius: '5px',
    },
    actModalList: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 165,
      background: 'black',
      opacity: 0.1,
    },
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
    wishes: {
      textAlign: 'center',
      fontSize: '20px',
      padding: '10px 0',
    },
    commentsModalWish: {
      fontSize: '18px',
      padding: '6px 0',
    },
  }));
  const classes = useStyle();
  return (
    <Box>
      <Box
        className={classes.actModalList}
        onClick={() => dispatch(deactModalList())}
      ></Box>
      <Box className={classes.wrapModalList}>
        <Box>
          <img className="imgFromModal" alt="" src={modalListItems.url} />
        </Box>
        <Box>
          <Box className={classes.wrapWishes}>
            <div className={classes.wishes}>Пожелания или замечания:</div>
            <div className={classes.commentsModalWish}>
              {modalListItems.wish}
            </div>
          </Box>
        </Box>
        <Box>
          <input
            className={classes.inputModal}
            placeholder="Введите пожелания или замечания"
          />
        </Box>
        <Button variant="outlined" color="primary">
          Добавить
        </Button>
      </Box>
    </Box>
  );
}

export default ModalItemsList;

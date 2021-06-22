import React from 'react';
import Box from '@material-ui/core/Box';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { deactModalList } from '../../../redux/actions/application';
import Wishes from './Wishes';
import ButtonForWishes from './ButtonForWishes';

function ModalItemsList() {
  const dispatch = useDispatch();
  const modalListItems = useSelector(
    (state) => state.application.modalListItems,
  );
  const useStyle = makeStyles(() => ({
    wrapModalList: {
      width: '600px',
      padding: '2px',
      background: 'white',
      boxShadow: '0px 0px 15px rgb(0, 0, 0)',
      position: 'absolute',
      left: 'calc(50% - 300px)',
      top: '8%',
      zIndex: 170,
      borderRadius: '5px',
    },
  }));
  const classes = useStyle();
  return (
    <Box>
      <Box
        position="absolute"
        width="100%"
        height="100%"
        zIndex={165}
        style={{ background: 'black', opacity: 0.1 }}
        onClick={() => dispatch(deactModalList())}
      ></Box>
      <Box className={classes.wrapModalList}>
        <Box>
          <img
            style={{ borderRadius: '3px' }}
            width="100%"
            alt=""
            src={modalListItems.url}
          />
        </Box>
        <Wishes />
        <ButtonForWishes />
      </Box>
    </Box>
  );
}

export default ModalItemsList;

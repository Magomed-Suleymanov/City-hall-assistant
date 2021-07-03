import React from 'react';
import Box from '@material-ui/core/Box';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Wishes from './Wishes';
import ButtonForWishes from './ButtonForWishes';
import { deactivationModalList } from '../../../redux/actions/application';

const useStyle = makeStyles(() => ({
  wrapModalList: {
    width: '600px',
    padding: '2px',
    background: 'white',
    boxShadow: '0px 0px 10px rgb(0, 0, 0)',
    position: 'absolute',
    left: 'calc(50% - 300px)',
    top: '8%',
    zIndex: 170,
    borderRadius: '5px',
  },
}));

function ModalItemsList() {
  const dispatch = useDispatch();
  const modalListItems = useSelector(
    (state) => state.application.modalListItems,
  );

  const handleClickDeactivate = () => {
    dispatch(deactivationModalList());
  };

  const classes = useStyle();
  return (
    <Box>
      <Box
        onClick={handleClickDeactivate}
        position="absolute"
        width="100%"
        zIndex="170"
        height="100%"
        style={{ opacity: 0.1, background: 'black' }}
      />
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

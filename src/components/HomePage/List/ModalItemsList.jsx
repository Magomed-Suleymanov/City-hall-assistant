import React from 'react';
import Box from '@material-ui/core/Box';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Appeals from './Appeals';
import { deactivationModalList } from '../../../redux/actions/application';

const useStyle = makeStyles(() => ({
  wrapModalList: {
    display:'flex',
    maxWidth: '1000px',
    minWidth:'300px',
    padding: '2px 0 2px 2px',
    height: '340px',
    background: 'white',
    boxShadow: '0px 0px 5px rgb(0, 0, 0)',
    position: 'absolute',
    left: 'calc(50% - (900px / 2))',
    top: '10%',
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
            width="500px"
            height='100%'
            alt="img"
            src={modalListItems.url}
          />
        </Box>
        <Appeals />
      </Box>
    </Box>
  );
}

export default ModalItemsList;

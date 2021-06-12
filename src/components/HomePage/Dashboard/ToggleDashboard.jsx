import React from 'react';
import { Box } from '@material-ui/core';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDashboard } from '../../../redux/ducks/application';
import { useHotkeys } from 'react-hotkeys-hook';

function ToggleDashboard(props) {
  const dispatch = useDispatch();
  const toggleDashBoard = useSelector(
    (state) => state.application.toggleBlockDashBoard,
  );
  const useStyle = makeStyles({
    box: {
      position: 'relative',
    },
    iconDashboardOpen: {
      transition: '.3s',
      position: 'absolute',
      zIndex: 150,
      top: 22,
      left: '8px',
      background: 'white',
      border: '1px solid lightgrey',
      borderRadius: '3px',
      cursor: 'pointer',
    },
    iconDashboardClose: {
      transform: 'rotate(180deg)',
      transition: '.3s',
      position: 'absolute',
      top: 22,
      left: '4px',
      zIndex: 150,
      background: 'white',
      border: '1px solid lightgrey',
      borderRadius: '3px',
      cursor: 'pointer',
    },
  });
  const classes = useStyle();
  const handleToggleDashboard = () => {
    dispatch(toggleDashboard());
  };

  useHotkeys('shift+p', () => {
    dispatch(toggleDashboard());
  });

  return (
    <Box className={classes.box}>
      <MenuOpenIcon
        fontSize="large"
        className={
          !toggleDashBoard
            ? classes.iconDashboardOpen
            : classes.iconDashboardClose
        }
        onClick={handleToggleDashboard}
      />
    </Box>
  );
}

export default ToggleDashboard;

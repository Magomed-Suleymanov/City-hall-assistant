import React from 'react';
import { Box } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDashboard } from '../../../redux/actions/application';
import { useHotkeys } from 'react-hotkeys-hook';

const useStyle = makeStyles({
  iconDashboardOpen: {
    position: 'absolute',
    zIndex: 150,
    top: 20,
    background: 'white',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer',
    fontSize: '20px',
    color: 'black',
    width: '24px',
    height: '40px',
    boxShadow: '0 1px 3px 0 rgb(38 38 38 / 50%)',
  },
  iconDashboardClose: {
    transform: 'rotate(180deg)',
    position: 'absolute',
    top: 20,
    left: '0px',
    zIndex: 150,
    fontSize: '20px',
    color: 'black',
    width: '24px',
    height: '40px',
    background: 'white',
    boxShadow: '0 1px 3px 0 rgb(38 38 38 / 50%)',
    borderRadius: '5px 0 0 5px',
    cursor: 'pointer',
  },
});

function ToggleDashboard() {
  const dispatch = useDispatch();
  const toggleDashBoard = useSelector(
    (state) => state.application.toggleBlockDashBoard,
  );

  const classes = useStyle();

  const handleToggleDashboard = () => {
    dispatch(toggleDashboard());
  };

  useHotkeys('shift+p', () => {
    dispatch(toggleDashboard());
  });

  return (
    <Box position="relative">
      <ChevronLeftIcon
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

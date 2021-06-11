import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ReorderIcon from '@material-ui/icons/Reorder';
import MapIcon from '@material-ui/icons/Map';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch } from 'react-redux';
import { addMap, loadList } from '../../../redux/ducks/application';
import Box from '@material-ui/core/Box';

function Navigation() {
  const dispatch = useDispatch();
  const useStyles = makeStyles({
    wrapButtons: {
      justifyContent: 'space-between',
      margin: '10px 10px',
    },
    wrapNav: {
      width: '150px',
      margin: 'auto',
    },
    Nav: {
      margin: 'auto',
      fontSize: '18px',
      textAlign: 'center',
    },
  });
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className={classes.wrapNav}
        >
          <Typography className={classes.Nav}>Навигация</Typography>
        </AccordionSummary>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.wrapButtons}
        >
          <BottomNavigationAction
            label="Map"
            icon={<MapIcon />}
            onClick={() => dispatch(addMap())}
          />
          <BottomNavigationAction
            label="Список"
            icon={<ReorderIcon />}
            onClick={() => dispatch(loadList())}
          />
        </BottomNavigation>
      </Accordion>
    </Box>
  );
}

export default Navigation;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ReorderIcon from '@material-ui/icons/Reorder';
import MapIcon from '@material-ui/icons/Map';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch } from 'react-redux'
import { openList } from '../../../redux/ducks/application'
import Box from '@material-ui/core/Box'

function Navigation (props) {
  const dispatch =useDispatch();
  const useStyles = makeStyles({
    wrapButtons: {
      justifyContent: 'space-between',
      margin: '10px 10px',
    },
  });
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
   <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Навигация</Typography>
        </AccordionSummary>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.wrapButtons}
          >
            <BottomNavigationAction label="Map" icon={<MapIcon />} />
            <BottomNavigationAction
              label="Список"
              icon={<ReorderIcon />}
            onClick={() => dispatch(openList())}
            />
          </BottomNavigation>
      </Accordion>
   </Box>
  )
}

export default Navigation
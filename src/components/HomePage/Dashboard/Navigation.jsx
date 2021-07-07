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
import { addMap, loadList } from '../../../redux/actions/application';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  Nav: {
    margin: 'auto',
    fontSize: '18px',
    textAlign: 'center',
  },
});

function Navigation() {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <Box>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Accordion className={classes.root}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.Nav}>Навигация</Typography>
          </AccordionSummary>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
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
      </Grid>
    </Box>
  );
}

export default Navigation;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Appeals from './Appeals';
import { loadingAppeals } from '../../../redux/actions/appeals';
import { loadList } from '../../../redux/actions/application';
import { loadingAppraisals } from '../../../redux/actions/appraisals';
import { loadingRatings } from '../../../redux/actions/rating';
import { useHistory, useParams } from 'react-router-dom';
import InfoStreets from './InfoStreets';

const useStyle = makeStyles(() => ({
  wrapList: {
    position: 'relative',
    margin: 'auto',
    width: '100%',
    height: '100%',
    background: 'white',
    boxShadow: '0px 0px 1px rgb(0 0 0)',
    alignItems: 'center',
    display: 'flex',
  },
  wrap: {
    position: 'relative',
    color: 'black',
    marginTop: '40px',
    marginBottom: '50px',
    margin: 'auto',
    width: '90%',
    height: '90%',
    borderRadius: '5px',
    background: 'white',
    boxShadow: '0px 0px 8px 0px rgb(200, 200, 200)',
  },
}));

function ListOfStreets() {
  const list = useSelector((state) => state.application.items);

  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadingAppeals());
    dispatch(loadingAppraisals());
    dispatch(loadingRatings());
    dispatch(loadList());
  }, [dispatch]);

  const classes = useStyle();

  return (
    <Box>
      <Grid container>
        <Box className={classes.wrapList}>
          <Box className={classes.wrap}>
            {list.map((items) => {
              return (
                <Box
                  key={items.id}
                  paddingBottom="10px"
                  marginBottom="10px"
                  alignItems="center"
                  justifyContent="space-around"
                  padding="10px 10px"
                >
                  <InfoStreets items={items} />
                  <Box style={{ width: '100%' }}>
                    <Accordion
                      onClick={() => {
                        history.push(`/list/${items.id}`);
                      }}
                      expanded={parseInt(id) === parseInt(items.id)}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography
                          style={{ fontSize: '20px', paddingLeft: '10px' }}
                        >
                          Отзывы
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Appeals id={items.id} />
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

export default ListOfStreets;

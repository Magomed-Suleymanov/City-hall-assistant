import React, { useEffect, useState } from 'react';
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
import Ratings from './Ratings';
import DeleteStreets from './DeleteStreets';
import { loadingAppeals } from '../../../redux/actions/appeals';
import {
  loadingDefaultImg,
  loadList,
} from '../../../redux/actions/application';
import { loadingAppraisals } from '../../../redux/actions/appraisals';
import { loadingRatings } from '../../../redux/actions/rating';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles(() => ({
  loading: {
    position: 'absolute',
    left: 'calc(50% - 60px)',
    color: 'red',
    top: '40%',
  },
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
  const defaultImg = useSelector((state) => state.application.defaultImg);

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(loadingAppeals());
    dispatch(loadingAppraisals());
    dispatch(loadingRatings());
    dispatch(loadingDefaultImg());
    dispatch(loadList());
  }, [dispatch]);

  const [id, setId] = useState(false);

  const classes = useStyle();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
                  <Box display="flex" justifyContent="space-between">
                    <Grid container md={7} item justify={'space-between'}>
                      <Box>
                        {items.url ? (
                          <img
                            style={{ borderRadius: '5px' }}
                            alt="img"
                            width="150px"
                            src={items.url}
                          />
                        ) : (
                          defaultImg.map((item) => {
                            return (
                              <Box key={item.id}>
                                <img
                                  style={{
                                    borderRadius: '5px',
                                  }}
                                  width="150px"
                                  src={item.url}
                                  alt="img"
                                />
                              </Box>
                            );
                          })
                        )}
                      </Box>
                      <Box
                        maxWidth={'350px'}
                        minWidth={'100px'}
                        fontSize="20px"
                      >
                        {items.address}
                      </Box>
                      <Box>
                        <Ratings key={items.id} itemStreet={items.id} />
                      </Box>
                    </Grid>
                    <Box>
                      <DeleteStreets key={items.id} streetId={items.id} />
                    </Box>
                  </Box>
                  <div style={{ width: '100%' }}>
                    <Accordion
                      onClick={() => {
                        setId(!id);
                        history.push(`/list/id/${items.id}`);
                      }}
                      expanded={expanded === items.id}
                      onChange={handleChange(items.id)}
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
                  </div>
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

import React from 'react';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Ratings from './Ratings';
import DeleteStreets from './DeleteStreets';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function InfoStreets({ items }) {
  const defaultImg = useSelector((state) => state.application.defaultImg);
  return (
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
        <Box maxWidth={'350px'} minWidth={'100px'} fontSize="20px">
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
  );
}

InfoStreets.propTypes = {
  items: PropTypes.object.isRequired,
};

export default InfoStreets;

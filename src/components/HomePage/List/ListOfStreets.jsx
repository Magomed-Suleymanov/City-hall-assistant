import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { LoadModalList } from '../../../redux/ducks/application';
import { Grid } from '@material-ui/core';
import SubstrWishes from './SubstrWishes';

function ListOfStreets() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.application.items);
  const useStyle = makeStyles(() => ({
    wrapList: {
      borderRadius: '5px',
      width: '100%',
      minWidth: '100px',
      background: 'whitesmoke',
      margin: ' 20px 25px 0px 25px',
      boxShadow: '0px 0px 8px rgb(217, 217, 217)',
      cursor: 'pointer',

      '&:hover': {
        transform: 'scale(1.04)',
        transition: '.1s',
      },
    },
  }));
  const classes = useStyle();
  return (
    <Box height='100vh'>
      {list.map((item) => {
        return (
          <Box
            className={classes.wrapList}
            onClick={() => dispatch(LoadModalList(item.id))}
          >
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Box display='flex' marginRight="15px" alignItems="center">
                <img
                  alt="Img"
                  width="120px"
                  height="100px"
                  style={{ borderRadius: '5px' }}
                  src={item.url}
                />
              </Box>
              <Box fontSize="16px" padding="5px 0" color='black'>
                {item.address}
                <SubstrWishes item={item} />
              </Box>
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
}

export default ListOfStreets;

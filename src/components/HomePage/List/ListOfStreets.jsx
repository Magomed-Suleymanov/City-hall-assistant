import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';
import { LoadModalList } from '../../../redux/ducks/application';

function ListOfStreets(props) {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.application.items);
  const useStyle = makeStyles(() => ({
    contImg: {
      marginRight: '20px',
    },
    imgList: {
      width: '140px',
      height: '125px',
      borderRadius: '5px',
    },
    addresList: {
      fontSize: '22px',
      padding: '5px 0',
    },
  }));
  const classes = useStyle();
  return (
    <Box>
      {list.map((item) => {
        return (
          <Box
            className="wrapList"
            onClick={() => dispatch(LoadModalList(item.id))}
          >
            <Box className={classes.contImg}>
              <img alt="Img" className={classes.imgList} src={item.url} />
            </Box>
            <Box className={classes.addresList}>{item.address}</Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default ListOfStreets;

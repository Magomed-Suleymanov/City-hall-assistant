import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRating } from '../../../redux/actions/rating';
import Rating from 'react-rating';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
  defaultColor: {
    color: 'lightgray',
  },

  activeColor: {
    color: '#fcf137',
  },
}));

function Ratings({ itemStreet }) {
  const ratings = useSelector((state) => {
    const items = state.rating.rating.filter(
      (item) => item.streetId === itemStreet,
    );
    return (
      items.reduce((value, item) => {
        return item.rating + value;
      }, 0) / items.length
    );
  });

  const classes = useStyle();
  const dispatch = useDispatch();

  const fixed = ratings.toFixed(1);

  const handleAddRating = (rating) => {
    dispatch(addRating(itemStreet, rating));
  };

  return (
    <Box>
      <Rating
        initialRating={fixed}
        emptySymbol={`fa fa-star ${classes.defaultColor}`}
        fullSymbol={`fa fa-star ${classes.activeColor}`}
        onClick={handleAddRating}
      />
      <p>{ratings ? fixed : 0}</p>
    </Box>
  );
}

Ratings.propTypes = {
  itemStreet: PropTypes.number.isRequired,
};

export default Ratings;

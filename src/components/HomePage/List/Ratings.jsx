import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRating } from '../../../redux/actions/rating';
import Rating from 'react-rating';
import Box from '@material-ui/core/Box';

function Ratings({ itemStreet }) {
  const dispatch = useDispatch();
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

  const fixed = ratings.toFixed(1);

  const handleAddRating = (rating) => {
    dispatch(addRating(itemStreet, rating));
  };

  return (
    <Box>
      <Rating
        initialRating={fixed}
        emptySymbol={'fa fa-star defaultColor'}
        fullSymbol={'fa fa-star activeColor'}
        onClick={handleAddRating}
      />
      <p>Rating is {fixed}</p>
    </Box>
  );
}

export default Ratings;

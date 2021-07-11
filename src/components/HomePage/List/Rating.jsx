import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

const useStyle = makeStyles(() => ({
  input: {
    display: 'none',
  },
  Star: {
    cursor: 'pointer',
    transition: 'color 200ms',
  },
  RatingBlock: {
    display: ' flex',
    alignItems: 'center',
  },
  TextRating: {
    marginLeft: '10px',
  },
  p: {
    fontSize: '12px',
  },
}));

function Rating({ id }) {
  const dispatch = useDispatch();
  const classes = useStyle();
  const rait = useSelector((state) =>
    state.appeals.appeals.map((item) => item.rating),
  );
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className={classes.RatingBlock}>
      <div>
        {[...Array(5)].map((star, i) => {
          const RatingValue = i + 1;
          return (
            <label key={i}>
              <input
                className={classes.input}
                type="radio"
                name="rating"
                value={RatingValue}
                onClick={() => setRating(RatingValue)}
              />
              <FaStar
                className={classes.Star}
                color={RatingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                size={20}
                onMouseEnter={() => setHover(RatingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <div className={classes.TextRating}>
        <p className={classes.p}>{rait.rating} из 5</p>
      </div>
    </div>
  );
}

export default Rating;

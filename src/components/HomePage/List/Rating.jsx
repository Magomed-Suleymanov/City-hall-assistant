import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

function Ratings(props) {
  const dispatch = useDispatch();
  const classes = useStyle();
  const rait = useSelector((state) =>
    state.appeals.appeals.map((item) => item.rating),
  );
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  //
  // const rating = <FontAwesomeIcon icon={faStar} />
  // const initialValue = props.rating;

  return (
    // <div className={classes.RatingBlock}>
    //   <Rating
    //     initialRating={rating}
    //     emptySymbol={rating}
    //     fullSymbol={rating}
    //   />
    //   <p>rating is {initialValue}</p>
    // </div>

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

export default Ratings;

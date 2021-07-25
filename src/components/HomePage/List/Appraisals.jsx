import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { useDispatch, useSelector } from 'react-redux';
import { addLike } from '../../../redux/actions/appraisals';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyle = makeStyles(() => ({
  likes: {
    color: 'green',
  },
  Dislikes: {
    color: 'red',
  },
}));

function Appraisals({ item }) {
  const appraisals = useSelector((state) => state.appraisals.appraisals);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const classes = useStyle();

  const [activeLike, setActiveLike] = useState(false);
  const [activeDislike, setActiveDislike] = useState(false);

  const like = appraisals.map((itemAppraisal) => {
    if (itemAppraisal.appealId !== item.id) {
      return '';
    }
    return itemAppraisal.like;
  });

  const sumLike = like.reduce((item, value) => {
    return parseInt(item) + value;
  }, 0);

  const dislike = appraisals.map((itemAppraisal) => {
    if (itemAppraisal.appealId !== item.id) {
      return '';
    }
    return itemAppraisal.dislike;
  });

  const sumDislike = dislike.reduce((item, value) => {
    return parseInt(item) + value;
  }, 0);

  const handleAddLike = () => {
    let like = 1;
    let dislike = '';
    dispatch(addLike(item.id, like, dislike, user.id, user.login));
  };

  const handleAddDisLike = () => {
    let like = '';
    let dislike = 1;
    dispatch(addLike(item.id, like, dislike, user.id, user.login));
  };

  return user.token ? (
    <Box width="100px" display="flex" justifyContent="space-between">
      <Box
        onClick={() => setActiveLike(!activeLike)}
        className={activeLike ? classes.likes : ''}
        display="flex"
        alignItems="center"
      >
        <ThumbUpIcon cursor="pointer" onClick={handleAddLike} />
        <Box marginLeft="5px">{sumLike}</Box>
      </Box>
      <Box
        onClick={() => setActiveDislike(!activeDislike)}
        className={activeDislike ? classes.Dislikes : ''}
        display="flex"
        alignItems="center"
      >
        <Box marginRight="5px">{sumDislike}</Box>
        <ThumbDownIcon cursor="pointer" onClick={handleAddDisLike} />
      </Box>
    </Box>
  ) : null;
}
Appraisals.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Appraisals;

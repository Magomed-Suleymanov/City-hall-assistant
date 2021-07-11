import React from 'react';
import Box from '@material-ui/core/Box';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { useDispatch, useSelector } from 'react-redux';
import { addLike } from '../../../redux/actions/appraisals';

function Appraisals({ item }) {
  const dispatch = useDispatch();
  const appraisals = useSelector((state) => state.appraisals.appraisals);
  const user = useSelector((state) => state.authReducer.user);

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
    if (appraisals.find((item) => item.userId === user.id)) return;
    dispatch(addLike(item.id, like, dislike, user.id, user.login));
  };

  const handleAddDisLike = () => {
    let like = '';
    let dislike = 1;
    if (appraisals.find((item) => item.userId === user.id)) return;
    dispatch(addLike(item.id, like, dislike, user.id, user.login));
  };

  return (
    <Box width="100px" display="flex" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <ThumbUpIcon cursor="pointer" onClick={handleAddLike} />
        <Box marginLeft="5px">{sumLike}</Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Box marginRight="5px">{sumDislike}</Box>
        <ThumbDownIcon cursor="pointer" onClick={handleAddDisLike} />
      </Box>
    </Box>
  );
}

export default Appraisals;

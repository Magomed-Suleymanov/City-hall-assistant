import React from 'react'
import Box from '@material-ui/core/Box';
import Proptypes from 'prop-types';

function SubstrWishes ( {item} ) {
  const subWish = (text)=> {
    if (text?.length > 10){
      return text.substring(0, 15) + '...'
    }
    return text
  }
  return (
    <Box
      fontWeight='300'
      padding='50px 0 0 0 '
      fontSize='16px'
      color='gray'>
      {subWish(item.wish)}
    </Box>
  )
}

SubstrWishes.propTypes = {
  item: Proptypes.object.isRequired,
}

export default SubstrWishes
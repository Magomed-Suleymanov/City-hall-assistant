import React from 'react';
import Box from '@material-ui/core/Box';
import ContainerModalAuth from './ContainerModalAuth';

function Authorization(props) {
  return (
    <Box>
      <Box
        width="100%"
        height="100%"
        position="absolute"
        zIndex={200}
        style={{ background: 'grey', opacity: 0.2 }}
      ></Box>
      <ContainerModalAuth />
    </Box>
  );
}

export default Authorization;

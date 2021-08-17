import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';

function LoadingSkeleton() {
  const style = {
    borderRadius: '5px',
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Skeleton
          style={style}
          animation="wave"
          variant="rect"
          width={150}
          height={100}
        />
        <Box
          width={600}
          display={'flex'}
          justifyContent="space-between"
          marginRight={40}
        >
          <Skeleton style={style} variant="rect" width={340} height={30} />
          <Box>
            <Skeleton style={style} variant="rect" width={120} height={20} />
            <Box marginTop={'10px'}>
              <Skeleton style={style} variant="rect" width={30} height={20} />
            </Box>
          </Box>
        </Box>
        <Skeleton style={style} variant="rect" width={120} height={35} />
      </Box>
      <Box>
        <Skeleton animation="wave" variant="text" width={'100%'} height={55} />
      </Box>
    </Box>
  );
}

export default LoadingSkeleton;

import React from 'react'
import { useSelector } from 'react-redux'
import Box from '@material-ui/core/Box'

function ListFromMap (props) {
  const list = useSelector(state => state.application.items)
  return (
    <Box>
      {list.map((item) => {
        return(
          <Box className='wrapList' >
            <Box className='alfa'>
              <img src={item.url} />
            </Box>
            <Box>{item.address}</Box>
          </Box>
        )
      })}
    </Box>
  )
}

export default ListFromMap
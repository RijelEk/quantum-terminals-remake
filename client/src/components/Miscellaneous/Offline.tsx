import React from 'react'
import { Box } from '@/UI/Boxes/Box'
import { Circle } from '@/UI/Terminals/Terminal_1/StandBy'

export default function Offile() {
  return (
    <Box
      disp="flex"
      jc="center"
      ai="center"
      position="absolute"
      top="0"
      center
      right="0"
      w="100%"
      h="100%"
      zIndex="999"
    >
      <Circle type="offline">Offline</Circle>
    </Box>
  )
}

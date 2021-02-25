import React from 'react'
import { DialogueLasleyCharacter } from '@/UI/Terminals/Shared/Dialogues'
import { Box } from '@/UI/Boxes/Box'

export default function Dialogues({ dialogue }) {
  console.log(dialogue)
  return (
    <Box
      transform="translate(-50%, -50%)"
      center
      disp="flex"
      jc="center"
      ai="center"
      position="absolute"
      bottom="0"
      right="50%"
      left="50%"
      w="100%"
      h="350px"
      zIndex="999"
    >
      <DialogueLasleyCharacter />
    </Box>
  )
}

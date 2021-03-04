import React from 'react'

/* UI */
import { Box } from '@/UI/Boxes/Box'
import {
  Board,
  Cell,
  Decorator1,
  Decorator2,
  Decorator3,
  Decorator4,
  DecoratorCenter,
} from '@/UI/Terminals/Terminal_1/Board'

/* Components */
import StandBy from '@/components/Miscellaneous/StandBy'
import Offline from '@/components/Miscellaneous/Offline'

const size = 30 // size of the map

const CellGen = () => {
  let components = []
  for (let i = 1; i < size + 1; i++) {
    components = [
      ...components,
      <Cell key={i} data-attr={i}>
        <DecoratorCenter>+</DecoratorCenter>
        <Decorator1>+</Decorator1>
        <Decorator2>+</Decorator2>
        <Decorator3>+</Decorator3>
        <Decorator4>+</Decorator4>
      </Cell>,
    ]
  }
  return components
}

export default function GameBoard({ dialogueStatus, gameStatus, level }) {
  console.log(level)

  return (
    <Box blur={dialogueStatus} mt={20}>
      <Board>
        {gameStatus === 'offline' ? <Offline /> : null}
        {gameStatus === 'stand by' ? <StandBy /> : null}
        {CellGen().map((el) => el)}
      </Board>
    </Box>
  )
}

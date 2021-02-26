import React, { useEffect, useState } from 'react'

/* Utilities */
import useGenerateLevelMemo from '@/utils/terminal_1/useGenerateLevelMemo'

/* UI */
import LayoutTerminalOne from '@/components/Layout/Terminal__1'
import {
  Board,
  Cell,
  Decorator1,
  Decorator2,
  Decorator3,
  Decorator4,
  DecoratorCenter,
} from '@/UI/Terminals/Terminal_1/Board'
import { Timer } from '@/UI/Terminals/Terminal_1/Timer'
import { Box } from '@/UI/Boxes/Box'
import { Header2, Paragraph } from '@/UI/Text/Text'

/* Components */
import StandBy from '@/components/Miscellaneous/StandBy'
import Offline from '@/components/Miscellaneous/Offline'
import Dialogues from '@/components/Dialogues/Dialogues'

import { useModalState, useModalDispatch } from '@/context/confirmModal'
import { useStartGameState, useStartGameDispatch } from '@/context/startGame'

type Dialogue = {
  level: number
  text: string[]
  character: string
}

const DialoguesMemo: Dialogue[] = [
  {
    level: 1,
    character: 'Lasley',
    text: [
      'Hello, my name is Lasley! I will guide you in this terminal.',
      'Welcome to Terminal #1. We are glad you made it here. We are ready to proceed to the first exercise',
      'The rules are simple.',
      'On the screen will appear white dots. You need to memorize their location and order in which they appear',
      'When they disappear, the game starts. You need to click on square cells where were dots in exact same order. It is important',
      "You will have limited time. So don't waste it.",
      'Remember. Keep your mind clean and everything will be alright.',
      'If you make a mistake, the game will start again.',
    ],
  },
  {
    level: 2,
    character: 'Lasley',
    text: [
      'Congratulations!',
      'You completed your first puzzle. Keep on going and succes will not keep you waiting',
    ],
  },
  {
    level: 5,
    character: 'Lasley',
    text: ['You are doing great!'],
  },
]

const Memo = () => {
  const size = 30 // size of the map
  const CURRENT__GAME = 'memo'

  const [loading, setLoading] = useState<boolean>(true) // page loading
  const [level, setLevel] = useState(null) // generated level
  const [gameStatus, setGameStatus] = useState<string>('offline') // start game | offline | stand by | play |
  const [dialogueStatus, setDialogueStatus] = useState<null | Dialogue>(null)

  const mockedGame: mockGame[] = JSON.parse(localStorage.getItem('game'))

  const stateConfirmModal = useModalState()
  const dispatchConfirmModal = useModalDispatch()

  console.warn('State confirm modal')
  console.log(stateConfirmModal)

  const stateStartGame = useStartGameState()
  const dispatchStartGame = useStartGameDispatch()

  console.warn('State start game')
  console.log(stateStartGame)

  const _finishDialogue = () => {
    setDialogueStatus(null)
    dispatchConfirmModal({
      type: 'ADD__MODAL',
      name: 'Are you ready?',
      message: 'The game is ready to be started',
      confirm: dispatchStartGame({
        game: 'memo',
      }),
    })
  }

  useEffect(() => {
    let result = [undefined]

    if (mockedGame) {
      /* Get anonim user level */
      const currentGame = mockedGame.find(
        (game) => game.title === CURRENT__GAME,
      )
      /* Get anonim user dialogue */
      const dialogue: Dialogue = DialoguesMemo.find(
        (dial) => dial.level === currentGame.level,
      )
      if (dialogue) {
        setDialogueStatus(dialogue)
        console.log(dialogue)
      }
      /* Generate level */
      do {
        const level_get = useGenerateLevelMemo(currentGame.level)
        result = [...level_get]

        if (!level_get.includes(undefined)) {
          setLoading(false)
          setLevel(level_get)
        }
      } while (result.includes(undefined))
    }
  }, [])

  const CellGen = () => {
    let components = []
    for (let i = 1; i < size + 1; i++) {
      components = [
        ...components,
        <Cell
          key={i}
          data-attr={i}
          active={level.includes(i)}
          first={level[0] === i}
        >
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

  if (loading) {
    return <div>Loading ...</div>
  }

  return (
    <LayoutTerminalOne logo>
      <Box h="100px">
        <Box blur={dialogueStatus} mb={5}>
          <Paragraph size="2.4rem" center>
            Time Left
          </Paragraph>
        </Box>
        <Box blur={dialogueStatus}>
          <Timer>00:00:00</Timer>
        </Box>
      </Box>
      <Box blur={dialogueStatus} mt={20}>
        <Board>
          {gameStatus === 'offline' ? <Offline /> : null}
          {gameStatus === 'stand by' ? <StandBy /> : null}
          {CellGen().map((el) => el)}
        </Board>
      </Box>
      {dialogueStatus ? (
        <Dialogues
          dialogue={dialogueStatus.text}
          character={dialogueStatus.character}
          _finishDialogue={_finishDialogue}
        />
      ) : null}
    </LayoutTerminalOne>
  )
}

export default Memo

import React, { useState, useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect'
import {
  DialogueLasleyCharacter,
  DialoguePlaceholder,
  DialogueButton,
  DialogueName,
  DialogueText,
} from '@/UI/Terminals/Shared/Dialogues'
import { Box } from '@/UI/Boxes/Box'

export default function Dialogues({ dialogue, character, _finishDialogue }) {
  const [start, setStart] = useState<boolean>(false)
  const [iteration, setIteration] = useState<number>(0)
  const [finishedTyping, setFinished] = useState<boolean>(false)
  const [currentLine, setCurrentLine] = useState<string | null>(null)

  // const currentLine: string = dialogue[iteration];

  useEffect(() => {
    setCurrentLine(null)
    setTimeout(() => {
      setCurrentLine(dialogue[iteration])
    }, 300)
  }, [iteration])

  setTimeout(() => {
    setStart(true)
  }, 2000)

  if (!start) {
    return null
  }

  const _nextLine = () => {
    console.log('Next line')
    setIteration(iteration + 1)
  }

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
      w="800px"
      h="350px"
      zIndex="999"
    >
      <DialogueLasleyCharacter />
      <DialoguePlaceholder>
        <DialogueName>{character}</DialogueName>
        {currentLine ? (
          <DialogueText>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(currentLine)
                  .callFunction(() => {
                    setFinished(true)
                  })
                  .start()
              }}
              options={{
                autoStart: true,
                loop: false,
                cursor: '',
                delay: 0.001,
              }}
            />
          </DialogueText>
        ) : null}
        {finishedTyping ? (
          <DialogueButton
            onClick={() =>
              iteration === dialogue.length - 1
                ? _finishDialogue()
                : _nextLine()
            }
          >
            ...
          </DialogueButton>
        ) : null}
      </DialoguePlaceholder>
    </Box>
  )
}

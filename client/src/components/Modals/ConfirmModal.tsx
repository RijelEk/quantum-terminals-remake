import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box } from '@/UI/Boxes/Box'
import { ModalWrapper, Modal } from '@/UI/Modals/ConfirmModal'
import { Header3, Paragraph } from '@/UI/Text/Text'
import { ConfirmButton, DeclineButton, ButtonText } from '@/UI/Buttons/Modal'
import { pathLobby } from '@/app/config/paths'
import { useStartGameDispatch } from '@/context/startGame'
import { useModalState, useModalDispatch } from '@/context/confirmModal'

interface ConfirmModalState {
  state: any
}
const ConfirmModal: React.FC<ConfirmModalState> = ({ state }) => {
  const history = useHistory()
  const dispatchStartGame = useStartGameDispatch()
  const dispatchConfirmModal = useModalDispatch()

  if (!state) {
    console.error('Something went wrong')
    return null
  }

  const clear = () => {
    dispatchConfirmModal({
      type: 'REMOVE__MODAL',
    })
  }

  const confirmAction = () => {
    clear()
    dispatchStartGame({
      type: 'START__GAME',
      game: 'memo',
    })
  }

  const declineAction = () => {
    clear()
    history.push(pathLobby())
  }

  return (
    <ModalWrapper>
      <Modal>
        <Box position="fixed" top="76px" fd="column">
          <Header3 size="2.1rem">{state.name}</Header3>
        </Box>
        <Box>
          <Paragraph size="1.7rem" bright>
            {state.message}
          </Paragraph>
        </Box>
        <Box mt={30} disp="flex">
          <Box mr="50">
            <ConfirmButton onClick={() => confirmAction()}>
              <ButtonText>Yes</ButtonText>
            </ConfirmButton>
          </Box>
          <Box>
            <DeclineButton onClick={() => declineAction()}>
              <ButtonText>No</ButtonText>
            </DeclineButton>
          </Box>
        </Box>
      </Modal>
    </ModalWrapper>
  )
}

export default ConfirmModal

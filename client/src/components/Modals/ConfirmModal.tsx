import { Box } from '@/UI/Boxes/Box'
import { ModalWrapper, Modal } from '@/UI/Modals/ConfirmModal'
import { Header3, Paragraph } from '@/UI/Text/Text'
import React from 'react'

interface ConfirmModalState {
  state: any
}
const ConfirmModal: React.FC<ConfirmModalState> = ({ state }) => {
  console.log(state)

  if (!state) {
    console.error('Something went wrong')
    return null
  }

  return (
    <ModalWrapper>
      <Modal>
        <Box position="fixed" top="76px">
          <Header3 size="2.1rem" bright>
            {state.name}
          </Header3>
        </Box>
        <Box>
          <Paragraph size="1.7rem" bright>
            {state.message}
          </Paragraph>
        </Box>
        <Box>
          <Box></Box>
          <Box></Box>
        </Box>
      </Modal>
    </ModalWrapper>
  )
}

export default ConfirmModal

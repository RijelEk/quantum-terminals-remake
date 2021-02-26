import React from 'react'

import { useModalState } from '@/context/confirmModal'
import ConfirmModal from '@/components/Modals/ConfirmModal'

type ModalChildrenProps = {
  children: React.ReactNode
}

export default function Modals({ children }: ModalChildrenProps) {
  const modalState = useModalState()
  console.log(modalState)

  return (
    <>
      {modalState ? <ConfirmModal state={modalState} /> : null}
      {children}
    </>
  )
}

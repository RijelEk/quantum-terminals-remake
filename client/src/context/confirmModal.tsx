import React from 'react'

const ConfirmModalContextState = React.createContext(null)
const ConfirmModalContextDispatch = React.createContext(null)

const ADD__MODAL = 'ADD__MODAL'
const REMOVE__MODAL = 'REMOVE__MODAL'

type State = {
  name: string
  message: string
  confirm: string
}

type Action = State & { type: string }
type ModalProviderProps = { children: React.ReactNode }

function modalReducer(state: State | null, action: Action) {
  switch (action.type) {
    case ADD__MODAL: {
      return {
        name: action.name,
        message: action.message,
        confirm: action.confirm,
      }
    }
    case REMOVE__MODAL: {
      return null
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
function ModalProvider({ children }: ModalProviderProps) {
  const [state, dispatch] = React.useReducer(modalReducer, null)
  return (
    <ConfirmModalContextState.Provider value={state}>
      <ConfirmModalContextDispatch.Provider value={dispatch}>
        {children}
      </ConfirmModalContextDispatch.Provider>
    </ConfirmModalContextState.Provider>
  )
}

function useModalState() {
  const context = React.useContext(ConfirmModalContextState)
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}
function useModalDispatch() {
  const context = React.useContext(ConfirmModalContextDispatch)
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }
  return context
}

export { ModalProvider, useModalState, useModalDispatch }

import React from 'react'

const StartGameContextState = React.createContext(null)
const StartGameContextDispatch = React.createContext(null)

const START__GAME = 'START__GAME'
const STOP__GAME = 'STOP__GAME'

type Action = { type: string; game: string }
type State = {
  game: string
  start: boolean
}
type ModalProviderProps = { children: React.ReactNode }

function startGameReducer(state: State | null, action: Action) {
  switch (action.type) {
    case START__GAME: {
      return {
        game: action.game,
        start: true,
      }
    }
    case STOP__GAME: {
      return null
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function StartGameProvider({ children }: ModalProviderProps) {
  const [state, dispatch] = React.useReducer(startGameReducer, null)
  return (
    <StartGameContextState.Provider value={state}>
      <StartGameContextDispatch.Provider value={dispatch}>
        {children}
      </StartGameContextDispatch.Provider>
    </StartGameContextState.Provider>
  )
}

function useStartGameState() {
  const context = React.useContext(StartGameContextState)
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}
function useStartGameDispatch() {
  const context = React.useContext(StartGameContextDispatch)
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }
  return context
}

export { StartGameProvider, useStartGameState, useStartGameDispatch }

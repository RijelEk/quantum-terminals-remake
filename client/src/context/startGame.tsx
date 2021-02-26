import React from 'react'

/* Declare Context */
const StartGameContextState = React.createContext(null)
const StartGameContextDispatch = React.createContext(null)

/* Actions */
const START__GAME = 'START__GAME'
const STOP__GAME = 'STOP__GAME'

type State = {
  game: string
  start: boolean
}
type Action = State & { type: string }
type StartGameProviderProps = { children: React.ReactNode }

/* Reducer */
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

/* Provider */
function StartGameProvider({ children }: StartGameProviderProps) {
  const [state, dispatch] = React.useReducer(startGameReducer, null)
  return (
    <StartGameContextState.Provider value={state}>
      <StartGameContextDispatch.Provider value={dispatch}>
        {children}
      </StartGameContextDispatch.Provider>
    </StartGameContextState.Provider>
  )
}

/* Custom hooks */
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

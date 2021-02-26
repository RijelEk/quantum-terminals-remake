import React from 'react'

const ErrorContextState = React.createContext(null)
const ErrorDispatch = React.createContext(null)

const ADD__ERROR = 'ADD__ERROR'
const REMOVE__ERROR = 'REMOVE__ERROR'
const ADD__FORM__ERROR = 'ADD__FORM__ERROR'
const REMOVE__FORM__ERROR = 'REMOVE__FORM__ERROR'

type State = {
  name: string
  message: string
  form?: string
}

type Action = State & { type: string }
type ModalProviderProps = { children: React.ReactNode }

function modalReducer(state: State[] | null, action: Action) {
  switch (action.type) {
    case ADD__ERROR: {
      return [
        ...state,
        {
          name: action.name,
          message: action.message,
        },
      ]
    }
    case REMOVE__ERROR: {
      const filtered = state.filter((err) => err.name != action.name)
      return filtered
    }
    case ADD__FORM__ERROR: {
      return [
        ...state,
        {
          name: action.name,
          message: action.message,
          form: action.form,
        },
      ]
    }
    case REMOVE__FORM__ERROR: {
      const filtered = state.filter((err) => err.name != action.name)
      return filtered
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
function ErrorhandleProvider({ children }: ModalProviderProps) {
  const [state, dispatch] = React.useReducer(modalReducer, null)
  return (
    <ErrorContextState.Provider value={state}>
      <ErrorDispatch.Provider value={dispatch}>
        {children}
      </ErrorDispatch.Provider>
    </ErrorContextState.Provider>
  )
}

function useErrorState() {
  const context = React.useContext(ErrorContextState)
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}
function useErrorDispatch() {
  const context = React.useContext(ErrorDispatch)
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }
  return context
}

export { useErrorState, useErrorDispatch, ErrorhandleProvider }

import { createContext } from 'react';

type ContextProps = { 
    me: object | null,
    rules: object | null,
    errors: [] | null
};
  
const State:any = createContext<Partial<ContextProps>>({
    me: null,
    rules: null,
    errors: null
});

export default State;
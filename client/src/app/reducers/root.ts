import { ME_QUERY } from "@/app/graphql/user";

export const QUERY_ERROR:string = "QUERY_ERROR";

export default function reducer(state, action) {
  switch(action.type) {
      case ME_QUERY:
          return {
              ...state,
              me: action.payload
      };
      case QUERY_ERROR:
        return {
            ...state,
            errors: [...state.errors || [], action.payload]
      };
      default:
          return state
  }
}
import { useEffect, useContext} from 'react'
import State from "@/app/context/state/State";
import { useMutation } from "@apollo/client";

export const useCustomMutation = (
  name:string,
  query:any
) => {

  const { dispatch } = useContext(State);
  const [register, {loading, error, data} ] = useMutation(query);

  // Dispatch errors
  useEffect(() => {
    if (error) {
      dispatch({ type: "MUTATION_ERROR", payload: data });
    }
  }, [error]);

  // Dispatch data
  useEffect(() => {
    if (data) {
      dispatch({ type: name, payload: data });
    }
  }, [data]);

  return {
    loading,
    error,
    data
  }
}
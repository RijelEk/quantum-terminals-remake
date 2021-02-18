import { useEffect, useContext} from 'react'
import State from "@/app/context/state/State";
import { useQuery } from "@apollo/client";

export const useCustomQuery = (
  name:string,
  query:any
) => {

  const { dispatch } = useContext(State);
  const { loading, error, data } = useQuery(query);

  // Dispatch errors
  useEffect(() => {
    if (error) {
      dispatch({ type: "QUERY_ERROR", payload: data });
    }
  }, [error]);

  // Dispatch data
  useEffect(() => {
    console.log(data)
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
import React, { useState, useContext, useEffect } from 'react'
import { useMutation } from "@apollo/client";
import { useHistory } from 'react-router-dom';
import LayoutMenu from "@/components/Layout/Layout_menu";
import Auth from '@/components/Forms/Auth';
import State from "@/app/context/state/State";
import { loginMutation } from "@/app/graphql/mutations/login";
import { QUERY_ERROR } from '@/app/reducers/root';
import { pathLobby } from '@/app/config/paths';

const INITIAL_STATE = {
  email: "",
  password:""
}

export default function Login() {

  const history = useHistory();
  const [formData, setFormData] = useState(INITIAL_STATE);
  const { state, dispatch } = useContext(State);
  
  const [login, { loading, data }] = useMutation(loginMutation);

  useEffect(() => {
    if (data && data.login) {
      if (data.login.user) {
        console.log(data.login)
        history.push(pathLobby()) //activation sent page
        setFormData(INITIAL_STATE); //reset formdata
      }
      else if (data.login.error) {
        dispatch({ type: QUERY_ERROR, payload: data.error }); //dispatch error
        setFormData(INITIAL_STATE)
      }
    }
   
    return () => {
      setFormData(INITIAL_STATE)
    }
  }, [data])

  const onSubmit = async (): Promise<any> => {
    login({
      variables: {
        ...formData
      }
    });
  };

  const onChange = (name: string, e: any) => {
    setFormData({
      ...formData,
      [name]: e.target.value
    })
  };

  const inputs = [
    {
      id: 1,
      name: "email",
      label: "E-mail",
      value: formData.email,
      placeholder: "E-mail"
    },
    {
      id: 2,
      name: "password",
      label: "Password",
      value: formData.password,
      placeholder: "Password"
    }
  ];

  return (
    <LayoutMenu logo>
      <Auth
        loading={loading}
        onSubmit={onSubmit}
        onChange={onChange}
        inputs={inputs}
        type="Login"
      />
    </LayoutMenu>
  )
}

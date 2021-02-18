import React, { useContext, useReducer } from 'react';
import { Switch, withRouter, Route } from "react-router";
import {ThemeProvider} from "styled-components";
import PrivateRoute from "@/HOC/Routes/PrivateRoute";
import PublicRoute from "@/HOC/Routes/PublicRoute";
import * as path from "@/app/config/paths";
import  State  from "@/app/context/state/State";
import reducer from "@/app/reducers/root";
import { theme } from "@/UI/config/theme";

/* Games */
import Memo from "@/pages/Game/Memo"; // memorize paths

/* Pages */
import Login from "@/pages/Login";
import Menu from "@/pages/Menu";
import Register from "@/pages/Register";
import Lobby from "@/pages/Lobby";
import NotFoundPage from '@/pages/NotFoundPage';
import ActivationSent from '@/pages/ActivationSent';
import Activation from '@/pages/Activate';

const App = () => {

  const initialState = useContext(State);
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      <ThemeProvider theme={ theme }>
        <State.Provider value={{ state, dispatch }}>
        <Switch>
            <PrivateRoute exact path={path.pathLobby()} component={Lobby} />
            <PrivateRoute exact path={path.pathTerminal("memo")} component={ Memo } />
            <PublicRoute exact path={path.pathRegister()} component={Register} />
            <PublicRoute exact path={path.pathLogin()} component={Login} />
            <PublicRoute exact path={path.pathHome()} component={Menu} />
            <PublicRoute exact path={path.pathActivationSent()} component={ActivationSent} />
            <PublicRoute exact path={path.pathActivation()} component={Activation}/>
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </State.Provider>
      </ThemeProvider>
      </>
  )
};

export default withRouter(App);
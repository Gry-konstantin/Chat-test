import React from "react";
import "./endpoints";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { LoginPage } from "../components/page/LoginPage";
import { SCREENS } from "./endpoints";
import { ChatPage } from "../components/page/ChatPage";
import { RegistrationPage } from "../components/page/RegistrationPage";

export const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={[SCREENS.SCREEN_LOGIN]}>
          <LoginPage />
        </Route>
        <Route exact path={[SCREENS.SCREEN_MAIN]}>
          <ChatPage />
        </Route>
        <Route exact path={[SCREENS.SCREEN_SIGNUP]}>
          <RegistrationPage />
        </Route>
        <Redirect
          strict
          from={SCREENS.SCREEN_STARTPAGE}
          to={SCREENS.SCREEN_SIGNUP}
        />
      </Switch>
    </Router>
  );
};

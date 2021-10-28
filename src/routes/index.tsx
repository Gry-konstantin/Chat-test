import React from "react";
import "./endpoints";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { LoginTemplates } from "../components/page/LoginTemplates";
import { SCREENS } from "./endpoints";
import { ChatPage } from "../components/page/ChatPage";

export const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={[SCREENS.SCREEN_SIGNUP]}>
          <LoginTemplates />
        </Route>
        <Route exact path={[SCREENS.SCREEN_MAIN]}>
          <ChatPage />
        </Route>
        <Redirect strict from="/" to="/signup" />
      </Switch>
    </Router>
  );
};

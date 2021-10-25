import React from "react";
import { LoginTemplates } from "./components/templates/LoginTemplates";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginTemplates />
        </Route>
        <Route exact path="/home">
          <div>HelloWorld</div>
        </Route>
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Events from "./containers/Events/Events";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/events" component={Events} />
      <Route path="/signin" component={Events} />
    </Switch>
  );
}

export default App;

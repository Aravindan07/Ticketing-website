import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./containers/Homepage/Homepage";
import Events from "./containers/Events/Events";
import ContactData from "./components/ContactData/ContactData";
// import Login from "./containers/Login/Login";
import Payment from "./payments/payments";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/events" component={Events} />
      {/* <Route path="/login" component={Login} /> */}
      <Route path="/contact-data" component={ContactData} />
      <Route path="/payments" component={Payment} />
    </Switch>
  );
}

export default App;

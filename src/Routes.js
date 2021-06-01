import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home/HomePage";
import FavPage from "./components/favs/FavPage";
import LoginPage from "./components/login/LoginPage";
import Results from "./components/Resultados/Results";
import PersonalPage from "./components/Personal/PersonalPage";

function PrivateRoute({ path, component, ...rest }) {
  let storage = localStorage.getItem("storage");
  storage = JSON.parse(storage);
  if (storage && storage.user) {
    return <Route path={path} component={component} {...rest} />;
  } else {
    return <Redirect to="/login" {...rest} />;
  }
}
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <PrivateRoute path="/favs" component={FavPage} />
      <PrivateRoute path="/Resultados" component={Results} />
      <PrivateRoute path="/Personal" component={PersonalPage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
}

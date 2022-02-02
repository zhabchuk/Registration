import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "../components/Home/Home";
import { auth, common } from "../mock-routes";
import Login from "../modules/Login/conteiner";
import RegistrationConteiner from "../modules/Registration/conteiner";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path={common.home()} exact>
          <Home/>
        </Route>
        <Redirect to={common.home()} />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path={auth.login()} exact>
          <Login />
        </Route>
        <Route path={auth.registration()} exact>
          <RegistrationConteiner />
        </Route>
        <Redirect to={auth.login()} />
      </Switch>
    );
  }
};

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GetCode from "./pages/Forms/GetCode/GetCode";
import LoginPage from "./pages/Forms/LoginPage/LoginPage";
import ResetPassword from "./pages/Forms/ResetPassword/ResetPassword";
import ChangePassword from "./pages/Forms/ChangePassword/ChangePassword";
import RegistrationPage from "./pages/Forms/RegistrationPage/RegistrationPage";
import RegistrationAccountPage from "./pages/Forms/RegistrationAccountPage/RegistrationAccountPage";
import HomePage from "./pages/HomePage/HomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/react-meros" component={HomePage} exact />
        <Route path="/login-page" component={LoginPage} exact />
        <Route path="/forgot-password" component={ResetPassword} exact />
        <Route path="/getting-code" component={GetCode} exact />
        <Route path="/change-password" component={ChangePassword} exact />
        <Route path="/registration" component={RegistrationPage} exact />
        <Route path="/register-account" component={RegistrationAccountPage} exact />

      </Switch>
    </BrowserRouter>
  );
};

export default Router;

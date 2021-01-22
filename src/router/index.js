import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import indexPage from "../page";
import loginPage from "../page/login";

const route = () => {
  return (
    <Router>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route path="/login" component={loginPage} exact></Route>
        <Route path="/" component={indexPage} exact></Route>
      </AnimatedSwitch>
    </Router>
  );
};

export default route;

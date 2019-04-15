import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import createHistory from 'history/createBrowserHistory';

class Router extends Component {
  render() {
    const history = createHistory({
      basename: process.env.PUBLIC_URL
    });
    return (
      <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/unknown" component={PageNotFound} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;

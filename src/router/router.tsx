import * as React from "react";
import { BrowserRouter, Switch } from 'react-router-dom';

import PublicRoute from './public-route';
import PrivateRoute from './private-route';

// Pages
import { Home } from '../pages/home.page';
import { ControlPanel } from '../pages/control-panel.page';
import { NotFound } from '../pages/not-found.page';


export interface RouterProps {
  isAdmin?: boolean;
}

export interface RouterState {
}

class Router extends React.Component<RouterProps, RouterState> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute Component={Home} path="/" exact={true} {...this.props} />
          <PrivateRoute
            isAdmin={!!this.props.isAdmin}
            Component={ControlPanel}
            path={"/control"}
            exact={true}
          />
          <PublicRoute Component={NotFound} path={undefined} exact={false} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default Router;
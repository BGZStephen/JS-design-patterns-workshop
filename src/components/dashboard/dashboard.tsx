import * as React from 'react';
import { Switch, withRouter, RouteComponentProps, Route } from 'react-router-dom';
import DashboardMenu from '../menu/menu';

import './dashboard.scss'
import Events from '../events/events';
import Singleton from '../singleton/singleton';
import Observable from '../observable/observable';
import Factory from '../factory/view';
import AbstractFactory from '../abstract-factory/view';

class Dashboard extends React.Component<RouteComponentProps<{}>> {
  render() {
    return (
      <div className="view-wrapper">
        <div className="navigation-container">
          <DashboardMenu />
        </div>
        <div className="outlet-container">
          <Switch>
            <Route path="/events" component={Events} />
            <Route path="/singleton" component={Singleton} />
            <Route path="/observable" component={Observable} />
            <Route path="/factory" component={Factory} />
            <Route path="/abstract-factory" component={AbstractFactory} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);

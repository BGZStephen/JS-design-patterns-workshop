import * as React from 'react';
import { Switch, withRouter, RouteComponentProps, Route } from 'react-router-dom';
import DashboardMenu from '../menu/menu';

import './dashboard.scss'
import Events from '../events/events';
import Singleton from '../singleton/singleton';

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
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);

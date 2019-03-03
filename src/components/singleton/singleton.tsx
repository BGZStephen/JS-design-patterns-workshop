import * as React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import UserService from '../../services/user';
import { PageOne } from './pages/one';
import { PageTwo } from './pages/two';
import { PageThree } from './pages/three';
import { PageFour } from './pages/four';
import { PageFive } from './pages/five';

import './singleton.scss'

class Singleton extends React.Component {
  render() {
    return (
      <div className="container full-height singleton-view">
        <div className="row">
          <div className="col col-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <strong>Singletons</strong>
              </div>
              <div className="panel-body">
                <p><strong>Set user</strong></p>
                <div className="row">
                  <button className="btn btn-success" onClick={() => UserService.setCurrentUser("Stephen")}>Stephen</button>
                  <button className="btn btn-success" onClick={() => UserService.setCurrentUser("Lloyd")}>Lloyd</button>
                  <button className="btn btn-success" onClick={() => UserService.setCurrentUser("Priyesh")}>Priyesh</button>
                  <button className="btn btn-success" onClick={() => UserService.setCurrentUser("Grace")}>Grace</button>
                  <button className="btn btn-success" onClick={() => UserService.setCurrentUser("Tim")}>Tim</button>
                  <button className="btn btn-success" onClick={() => UserService.setCurrentUser("Michael")}>Michael</button>
                  <button className="btn btn-success" onClick={() => UserService.setCurrentUser("Jon")}>Jon</button>
                </div>
                <p><strong>Clear user</strong></p>
                <div className="row">
                  <button className="btn btn-danger" onClick={() => UserService.clearCurrentUser()}>Clear user</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-6">
            <div className="panel panel-warning">
              <div className="panel-heading">
                <Link to="/singleton/page-one" className="btn btn-secondary">Page 1</Link>
                <Link to="/singleton/page-two" className="btn btn-secondary">Page 2</Link>
                <Link to="/singleton/page-three" className="btn btn-secondary">Page 3</Link>
                <Link to="/singleton/page-four" className="btn btn-secondary">Page 4</Link>
                <Link to="/singleton/page-five" className="btn btn-secondary">Page 5</Link>
              </div>
              <div className="panel-body">
                <Switch>
                  <Route path="/singleton/page-one" component={PageOne} />
                  <Route path="/singleton/page-two" component={PageTwo} />
                  <Route path="/singleton/page-three" component={PageThree} />
                  <Route path="/singleton/page-four" component={PageFour} />
                  <Route path="/singleton/page-five" component={PageFive} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Singleton;

import * as React from 'react';
import NotificationService from '../../services/notification';

import './events.scss';

class Events extends React.Component {
  render() {
    return (
      <div className="container full-height events-view">
        <div className="row">
          <div className="col col-4">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <strong>Event triggers</strong>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col col-4">
                    <button 
                      className="btn btn-success btn-block"
                      onClick={() => NotificationService.showLeft()}
                    >Left</button>
                  </div>
                  <div className="col col-4">
                    <button 
                      className="btn btn-primary btn-block"
                      onClick={() => NotificationService.showMiddle()}
                    >Middle</button>
                  </div>
                  <div className="col col-4">
                    <button 
                      className="btn btn-danger btn-block"
                      onClick={() => NotificationService.showRight()}
                    >Right</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-4">
                    <button 
                      className="btn btn-success btn-block"
                      onClick={() => {
                        NotificationService.showLeft()
                        NotificationService.showMiddle()
                      }}
                    >Left + Middle</button>
                  </div>
                  <div className="col col-4">
                    <button 
                      className="btn btn-primary btn-block"
                      onClick={() => {
                        NotificationService.showLeft()
                        NotificationService.showRight()
                      }}
                    >Left + Right</button>
                  </div>
                  <div className="col col-4">
                    <button 
                      className="btn btn-danger btn-block"
                      onClick={() => {
                        NotificationService.showLeft()
                        NotificationService.showMiddle()
                        NotificationService.showRight()
                      }}
                    >All</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;

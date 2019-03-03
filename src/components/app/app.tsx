import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Notification } from '../notification/notification';
import Dashboard from '../dashboard/dashboard';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Dashboard />
          <Notification />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

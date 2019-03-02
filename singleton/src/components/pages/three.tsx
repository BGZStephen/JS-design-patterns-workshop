import * as React from "react"
import UserService from '../../services/user';

interface Props {}

interface State {
  user: string;
}

export class PageThree extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      user: UserService.getCurrentUser(),
    }
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <h1>Page Three</h1>
        <div className="user-detail-widget">
          <h2>Current user</h2>
          {user}
        </div>
        <hr></hr>
        <div className="user-edit-widget">
          <h2>Edit User</h2>
          <button onClick={() => {
            UserService.setCurrentUser("Stephen")
            this.setState({user: UserService.getCurrentUser()})
          }}>Set user to Stephen</button>
          <br />
          <br />
          <button onClick={() => {
            UserService.clearCurrentUser()
            this.setState({user: UserService.getCurrentUser()})
          }}>Clear user</button>
        </div>
      </div>
    );
  }
}
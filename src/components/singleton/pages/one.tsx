import * as React from "react"
import UserService from '../../../services/user';

interface Props {}

interface State {
  user: string;
}

export class PageOne extends React.Component<Props, State> {
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
        <p><strong>Page</strong>: 1</p>
        <p><strong>User</strong>: {user}</p>
      </div>
    );
  }

  componentDidMount() {
    UserService.on("user-updated", (user) => {
      this.setState({user})
    })
  }
}
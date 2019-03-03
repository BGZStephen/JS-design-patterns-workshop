import * as React from 'react';
import {withRouter, NavLink, RouteComponentProps} from 'react-router-dom';
import MenuService from '../../services/menu';

interface Props extends RouteComponentProps {
  activePath: string,
  menuItem: IMenuItem,
}

export interface IMenuItem {
  link: string,
  icon: string,
  label: string,
  action?: string,
}

interface State {
  menuStyles: object,
}

class MenuItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      menuStyles: {},
    };
  }

  render() {
    return (
      <NavLink className={this.props.activePath === this.props.menuItem.link ? 'menu-item active' : 'menu-item'} to={this.props.menuItem.link} style={this.state.menuStyles}>
        <li>
          <div className="menu-item-content" onClick={this.onClick}>
            <i className={this.props.menuItem.icon}></i>
            <span>{this.props.menuItem.label}</span>
          </div>
        </li>
      </NavLink>
    );
  }

  static getDerivedStateFromProps() {
    const menuItemHeight = window.innerWidth > 968 ? 50 : 35;
    return {menuStyles: {height: `${menuItemHeight}px`}};
  }

  onClick = () => {
    MenuService.menuItemClicked(this.props.menuItem);
  }
}

export default withRouter(MenuItem);

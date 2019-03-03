import * as React from 'react';
import MenuItem, { IMenuItem } from './menu-item';
import {withRouter, RouteComponentProps} from 'react-router';
import MenuService from '../../services/menu';
import NotificationService from '../../services/notification';

interface Props extends RouteComponentProps {}

interface DashboardMenuState {
  menuItemHeight: number,
  submenuHeight: number,
  expanded: boolean,
  menuStyles: object,
  menuItems: {
    id: string,
    link: string,
    icon: string,
    label: string,
  }[],
  activeRoutePath: string,
}

class DashboardMenu extends React.Component<Props, DashboardMenuState> {
  constructor(props: Props) {
    super(props);

    const menuItems = [
      {
        id: 'home',
        label: 'Home',
        icon: 'fas fa-desktop fa-fw',
        link: '/home',
      },
      {
        id: 'events',
        label: 'Events',
        icon: 'fas fa-calendar-day fa-fw',
        link: '/events',
      },
      {
        id: 'singleton',
        label: 'Singleton',
        icon: 'fas fa-fingerprint fa-fw',
        link: '/singleton',
      },
      {
        id: 'observable',
        label: 'Observable',
        icon: 'fas fa-eye fa-fw',
        link: '/observable',
      },
      {
        id: 'factory',
        label: 'Factory',
        icon: 'fas fa-cube fa-fw',
        link: '/factory',
      },
      {
        id: 'abstract-factory',
        label: 'Abstract Factory',
        icon: 'fas fa-cubes fa-fw',
        link: '/abstract-factory',
      },
    ];

    const menuItemHeight = window.innerWidth > 968 ? 50 : 35;

    const menuStyles = window.innerWidth > 968 ? {
      height: `${menuItems.length * menuItemHeight}px`,
      maxHeight: '100vh',
      overflow: window.innerWidth > 968 ? 'visible' : 'scroll',
    } : {
      height: '0px',
      maxHeight: '0',
      overflow: 'hidden',
    };

    this.state = {
      menuItemHeight,
      submenuHeight: 0,
      expanded: window.innerWidth >= 968,
      menuStyles,
      menuItems,
      activeRoutePath: '',
    };

    window.addEventListener('resize', () => {
      const newMenuStyles = this.getMenuStyles();
      this.setState({menuStyles: newMenuStyles});
    });
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.location !== prevProps.location) {
      this.setState({activeRoutePath: this.props.location.pathname});
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      if (!this.state.expanded && window.innerWidth > 968) {
        this.toggleExpand();
      } else if (this.state.expanded && window.innerWidth < 968) {
        this.toggleExpand();
      }
    });

    MenuService.on('menu-item-clicked', (menuItem: IMenuItem) => {
      if (window.innerWidth < 968 && this.state.expanded) {
        setTimeout(() => {
          this.toggleExpand();
        }, 250);
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => {});
  }

  render() {
    return (
      <div className="menu primary-menu">
        <div className="logo-container">
          <h1><strong>JS</strong> Design Patterns </h1>
          <div className="menu-toggle-container" onClick={this.toggleExpand}>
            <i className="fa fa-bars"></i>
          </div>
        </div>
        <div className="navigation">
          <ul style={this.state.menuStyles}>
            {
              this.state.menuItems.map(menuItem => (
                <MenuItem key={menuItem.id} menuItem={menuItem} activePath={this.state.activeRoutePath} />
              ))
            }
          </ul>
        </div>
      </div>
    );
  }

  toggleExpand = () => {
    const newState = {
      expanded: !this.state.expanded,
      menuStyles: this.getMenuStyles(!this.state.expanded),
    };

    this.setState(newState);
  }

  getMenuStyles = (expanded = this.state.expanded) => {
    const menuItemHeight = window.innerWidth > 968 ? 50 : 35;

    let menuStyles = {};

    if (expanded) {
      menuStyles = {
        height: `${this.state.menuItems.length * menuItemHeight}px`,
        maxHeight: '100vh',
        overflow: window.innerWidth > 968 ? 'visible' : 'scroll',
      };
    } else {
      menuStyles = {
        height: '0px',
        maxHeight: '0',
        overflow: 'hidden',
      };
    }

    return menuStyles;
  }
}

export default withRouter(DashboardMenu);

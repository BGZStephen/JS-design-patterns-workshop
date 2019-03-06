import * as React from 'react';
import NotificationService from '../../services/notification';

import './notification.scss';

interface Props {}

interface NotificationState {
  leftVisible: boolean,
  middleVisible: boolean,
  rightVisible: boolean,
  delay: number,  
}

export class Notification extends React.Component<Props, NotificationState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      leftVisible: false,
      middleVisible: false,
      rightVisible: false,
      delay: 1000,
    };

    this.setupEventListeners();
  }

  private setupEventListeners() {
    NotificationService.on('show-left', () => {
      this.setState({
        leftVisible: true,
      });

      window.setTimeout(() => {
        this.setState({
          leftVisible: false
        });
      }, this.state.delay);
    });

    NotificationService.on('show-middle', () => {
      this.setState({
        middleVisible: true,
      });

      window.setTimeout(() => {
        this.setState({
          middleVisible: false,
        });
      }, this.state.delay);
    });

    NotificationService.on('show-right', () => {
      this.setState({
        rightVisible: true,
      });

      window.setTimeout(() => {
        this.setState({
          rightVisible: false,
        });
      }, this.state.delay);
    });
  }

  public render() {
    const { leftVisible, middleVisible, rightVisible } = this.state;
    return (
      <div className='notification-service'>
        <div className={leftVisible ? "visible notification left success" : "notification left success"}>LEFT</div>
        <div className={middleVisible ? "visible notification middle info" : "notification middle info"}>MIDDLE</div>
        <div className={rightVisible ? "visible notification right danger" : "notification right danger"}>RIGHT</div>
      </div>
    );
  }
}
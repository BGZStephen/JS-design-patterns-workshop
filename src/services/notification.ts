import { EventEmitter, Listener } from 'events';

class NotificationService {
  private eventEmitter: EventEmitter;

  constructor() {
    this.eventEmitter = new EventEmitter();
  }

  on(eventName: string, listener: Listener) {
    this.eventEmitter.on(eventName, listener);
  }

  showLeft() {
    this.eventEmitter.emit('show-left');
  }

  showMiddle() {
    this.eventEmitter.emit('show-middle');
  }

  showRight() {
    this.eventEmitter.emit('show-right');
  }
}

export default Object.freeze(new NotificationService());

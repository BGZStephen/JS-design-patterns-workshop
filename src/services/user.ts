import { EventEmitter, Listener } from "events";

class UserService {
  private user: string;
  private eventEmitter: EventEmitter;

  constructor() {
    this.user = "";
    this.eventEmitter = new EventEmitter();
  }

  on(eventName: string, listener: Listener) {
    this.eventEmitter.on(eventName, listener);
  }

  public getCurrentUser = (): string => {
    return this.user;
  }
  
  public clearCurrentUser = (): void => {
    this.user = "";
    this.eventEmitter.emit('user-updated', '');
  }

  public setCurrentUser = (value: string): void => {
    this.user = value;
    this.eventEmitter.emit('user-updated', value);
  }
}

export default new UserService();
import { EventEmitter } from 'events';
import { IMenuItem } from '../components/menu/menu-item';

interface IMenuEventCallback {
  (menuItem: IMenuItem) : void;
}

class MenuService {
  private eventEmitter: EventEmitter;

  constructor() {
    this.eventEmitter = new EventEmitter();
  }

  on = (eventName: string, listener: IMenuEventCallback): void => {
    this.eventEmitter.on(eventName, listener);
  }

  menuItemClicked = (menuItem: IMenuItem): void => {
    this.eventEmitter.emit('menu-item-clicked', menuItem);
  }
}

const instance = new MenuService();
Object.freeze(instance);

export default instance;

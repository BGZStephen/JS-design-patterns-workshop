interface Observer {
  onData: Function;
}

class ValueManager {
  private observers: Observer[];
  private value: number;

  constructor() {
    this.value = 1;
    this.observers = [];
  }

  incrementValue() {
    if (this.observers) {
      this.value += 1;
      for (const observer of this.observers) {
        observer.onData(this.value)
      }
    }
  }
  
  decrementValue() {
    if (this.observers) {
      this.value -= 1;
      for (const observer of this.observers) {
        observer.onData(this.value)
      }
    }
  }

  getCurrentValue() {
    return this.value;
  }

  observe(observer: Observer) {
    this.observers.push(observer);
  }
}

export default new ValueManager();
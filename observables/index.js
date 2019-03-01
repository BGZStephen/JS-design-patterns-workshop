window.addEventListener("load", () => {
  const valueManager = new ValueManager();

  init()
  
  function init() {
    addEventListeners();
    bindInitialValues();

    setObservableOne();
    setObservableTwo();
    setObservableThree();
  }

  function addEventListeners() {
    document.querySelector(".increment-button").addEventListener("click", () => valueManager.incrementValue());
    document.querySelector(".decrement-button").addEventListener("click", () => valueManager.decrementValue());
  }

  function bindInitialValues() {
    document.querySelector(".observer-one").textContent = valueManager.getCurrentValue();
    document.querySelector(".observer-two").textContent = valueManager.getCurrentValue();
    document.querySelector(".observer-three").textContent = valueManager.getCurrentValue();
  }

  function setObservableOne() {
    valueManager.observe({
      onData: (value) => document.querySelector(".observer-one").textContent = value
    })
  }

  function setObservableTwo() {
    valueManager.observe({
      onData: (value) => document.querySelector(".observer-two").textContent = value
    })
  }

  function setObservableThree() {
    valueManager.observe({
      onData: (value) => document.querySelector(".observer-three").textContent = value
    })
  }
})

class ValueManager {
  constructor() {
    this.value = 1;
    this.observers = [];
  }

  incrementValue() {
    if (this.observers) {
      for (const observer of this.observers) {
        observer.onData(this.value)
      }
      this.value += 1;
    }
  }
  
  decrementValue() {
    if (this.observers) {
      for (const observer of this.observers) {
        observer.onData(this.value)
      }
      this.value -= 1;
    }
  }

  getCurrentValue() {
    return this.value;
  }

  observe(observer) {
    this.observers.push(observer);
  }
}
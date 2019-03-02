import { EventEmitter } from "events"

window.addEventListener("load", () => {
  const notificationService = new NotificationService();

  init()

  function init() {
    setupNotificationEventListeners()
    setupButtonEventListeners()
  }

  function setupButtonEventListeners() {
    const leftButton = document.querySelector(".notification-button-left")
    const middleButton = document.querySelector(".notification-button-middle")
    const rightButton = document.querySelector(".notification-button-right")

    const leftMiddleButton = document.querySelector(".notification-button-left-middle")
    const leftRightButton = document.querySelector(".notification-button-left-right")

    const allButton = document.querySelector(".notification-button-all")
    
    leftButton.addEventListener("click", () => notificationService.showLeft())
    middleButton.addEventListener("click", () => notificationService.showMiddle())
    rightButton.addEventListener("click", () => notificationService.showRight())

    leftMiddleButton.addEventListener("click", () => {
      notificationService.showLeft()
      notificationService.showMiddle()
    })

    leftRightButton.addEventListener("click", () => {
      notificationService.showLeft()
      notificationService.showRight()
    })

    allButton.addEventListener("click", () => {
      notificationService.showLeft()
      notificationService.showMiddle()
      notificationService.showRight()
    })
  }

  function setupNotificationEventListeners() {
    const leftNotification = document.querySelector(".notification-left")
    const middleNotification = document.querySelector(".notification-middle")
    const rightNotification = document.querySelector(".notification-right")

    notificationService.on("show-left", () => showNotification(leftNotification));
    notificationService.on("show-middle", () => showNotification(middleNotification));
    notificationService.on("show-right", () => showNotification(rightNotification));
  }

  function showNotification(element) {
    if (!element.classList.contains("active")) {
      element.classList.add("active");
    }

    setTimeout(() => {
      element.classList.remove("active");
    }, 1000);
  }
})

class NotificationService {
  constructor() {
    this.eventEmitter = new EventEmitter();
  }

  on(eventName, listener) {
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

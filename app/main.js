import ApodController from "./Controllers/ApodController.js";

class App {
  apodController = new ApodController()
}

window["app"] = new App();

import apodService from "../Services/ApodService.js"
import { ProxyState } from "../AppState.js";

function _drawApod() {
  let apod = ProxyState.apod
  console.log(apod)
  if (apod.includes("youtube")) {
    document.getElementById("apod-vid").innerHTML = `<div class="col-12 text-center"><iframe src="${apod}"  width="500" height="500"></iframe></div> `
    document.getElementById("bg-img").style.backgroundImage = ``
  } else {
    document.getElementById("bg-img").style.backgroundImage = `url(${apod})`
    document.getElementById("apod-vid").innerHTML = ``
  }

}
export default class ApodController {
  constructor() {
    this.getApod()
    ProxyState.on("apod", _drawApod)
  }

  getApod() {
    try {
      apodService.getApod()
    } catch (error) {
      console.error(error);
    }
  }
  search(event) {
    try {
      event.preventDefault();
      let form = event.target
      let date = form.date.value
      apodService.search(date)
      form.reset()
    } catch (error) {
      console.error(error);
    }

  }

}
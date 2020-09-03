import { api } from "./AxiosService.js"
import { ProxyState } from "../AppState.js";
class ApodService {

  constructor() {

  }

  async getApod() {
    let res = await api.get("apod?api_key=FZ5OnWRfcFyPjVqHBQLFRik3w1ZDB63jL6vvFX4j")
    ProxyState.apod = res.data.url
  }

  async search(date) {
    let res = await api.get("apod?api_key=FZ5OnWRfcFyPjVqHBQLFRik3w1ZDB63jL6vvFX4j&date=" + date)
    // console.log(res)
    ProxyState.apod = res.data.url
  }
}

const APODSERVICE = new ApodService()
export default APODSERVICE
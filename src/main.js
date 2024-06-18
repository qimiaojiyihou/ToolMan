import {createApp} from "vue"
import App from "./app.vue"
import router from "./router"
import './styles/index.css'
import EventEmitter from "eventemitter3"
window._EE_ = new EventEmitter()

const app = createApp(App)
app.use(router)
app.mount("#root")
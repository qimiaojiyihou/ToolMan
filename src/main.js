import {createApp} from "vue"
import App from "./app.vue"
import router from "./router"
import './styles/index.css'
import 'virtual:svg-icons-register'
import EventEmitter from "eventemitter3"
window._EE_ = new EventEmitter()


const app = createApp(App)
import svgIcon from '@/components/svgIcon/index.vue'
app.component('svg-icon', svgIcon)

app.use(router)
app.mount("#root")
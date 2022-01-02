import { createApp } from 'vue'
import router from '@/router/index'
import store from '@/store/index'
import directives from '@/plugins/directives/index'
import prototype from '@/plugins/prototype/index'
import 'virtual:svg-icons-register'
import App from './App.vue'
import '@/style/_main.scss'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(directives)
app.use(prototype)

store.globalProperties = app.config.globalProperties

app.mount('#app')

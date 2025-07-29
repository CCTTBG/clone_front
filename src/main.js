import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './fontawesome/icons' 
import router from './router'

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)
app.use(router).mount('#app')
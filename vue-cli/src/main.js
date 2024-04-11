import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App);

app.directive('color', (el, { value}) => {
    el.style.color = value || 'red'
})

app.directive('focus', (el) => {
    el.focus()
})

app.use(router)
app.mount('#app')

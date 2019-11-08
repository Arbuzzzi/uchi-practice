import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueRangeSlider from 'vue-range-component'

//fa
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUp, faArrowDown, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowUp, faArrowDown, faArrowLeft, faArrowRight)

// styles
import 'vue-range-component/dist/vue-range-slider.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/general.scss'

Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-range-slider', VueRangeSlider)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'; // Choose a theme
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './assets/Sass/Styles/common.scss';
import Routes from './routes/routes.js'
import VueRouter from 'vue-router'


Vue.use(PrimeVue);
Vue.use(VueRouter)

const router = new VueRouter({
  routes : Routes,
  mode: 'history'
  
})

// Initialize AOS


Vue.config.productionTip = false

new Vue({
  router : router,
  render: h => h(App),
}).$mount('#app')

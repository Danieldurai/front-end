import Home from '../views/HomePage.vue'
import About from '../views/AboutPage.vue'


export default[
    {path: '/', component: Home},
    {path: '/about', name : 'about', component: About}
]
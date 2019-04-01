import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About'
import Techs from './views/Techs'
import Projects from './views/Projects'
import Post from './views/post/Index'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/about',
        name: 'about',
        component: About
    }, {
        path: '/techs',
        name: 'techs',
        component: Techs
    }, {
        path: '/projects',
        name: 'projects',
        component: Projects
    }, {
        path: '/post',
        name: 'post',
        component: Post
    }, {
        path: '/',
        name: 'about',
        component: About
    }],
    mode: "history"
})
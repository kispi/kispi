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
        name: 'About',
        component: About
    }, {
        path: '/techs',
        name: 'Techs',
        component: Techs
    }, {
        path: '/projects',
        name: 'Projects',
        component: Projects
    }, {
        path: '/post',
        name: 'Post',
        component: Post
    }, {
        path: '/',
        name: 'About',
        component: About
    }],
    mode: "history"
})
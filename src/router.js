import Login from './pages/Login'
import Home from './pages/home/Home'
import About from './pages/about/About'

// 不需要登录
export const mainRouter = [
    { path: '/login', name: '登录', component: Login},
]

// 需要登录
export const adminRouter = [
    { path: '/home', home: true, name: '首页', component: Home},
    { path: '/about', name: 'About', component: About},
]
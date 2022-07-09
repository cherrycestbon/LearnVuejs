//配置路由相关的信息
//这个vue-router是安装在框架中的，在package.json的dependencies中能看到
import VueRouter from 'vue-router'
//因为要使用Vue.use，所有要导入Vue
import Vue from 'vue'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
// import HomeNews from '../components/HomeNews'
// import HomeMessage from '../components/HomeMessage'
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

//导入路由之后，就可使用了
//1.通过Vue.use(插件)来安装插件。以后不管使用任何vue的插件，都必须通过Vue.use(插件)来安装一下。
Vue.use(VueRouter)
//2.创建VueRouter对象
const routes = [
//配置url和组件的映射关系，一个映射关系是一个对象
  {
    /*配置默认路径*/
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        /*配置默认路径*/
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',//子组件路径前不需要加杠，会自动拼接上杠
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  //配置路径和组件之间的映射关系
  routes,//es6的增强写法
  mode: 'history',
  linkActiveClass: 'active'
})

//3.将router对象传入Vue实例中
export default router

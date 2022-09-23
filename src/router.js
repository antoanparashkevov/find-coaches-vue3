import { createRouter, createWebHistory } from 'vue-router';

//import components...
import CoachDetails from '@/pages/coaches/CoachDetails';
import CoachesList from '@/pages/coaches/CoachesList';
import ContactCoach from '@/pages/coaches/ContactCoach';
import CoachRegistration from '@/pages/requests/CoachRegistration';
import RequestsReceived from '@/pages/requests/RequestsReceived';
import UserAuth from '@/pages/auth/UserAuth';
import notFound from '@/pages/notFound';

//import global store...
import store from './store/store'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id', component: CoachDetails,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach }
      ]
    },
    { path: '/requests', component: RequestsReceived, meta:{
      userAuth: true
      } },
    { path: '/register', component: CoachRegistration, meta: {
        userAuth: true
      } },
    { path: '/auth', component: UserAuth, meta: {
        userUnAuth: true
      } },
    { path: '/notFound(.*)', component: notFound }
  ]
});

//global Navigation Guards...
router.beforeEach((to,from,next)=>{
  if(to.meta.userAuth && !store.getters['auth/isAuthenticated']) {
    next('/auth');
  }else if(to.meta.userUnAuth && store.getters['auth/isAuthenticated']) {
    next('/coaches');
  }else{
    next();
  }
})

export default router;

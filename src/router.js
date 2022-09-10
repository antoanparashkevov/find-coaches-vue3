import { createRouter,createWebHistory } from 'vue-router';

//import components...
import CoachDetails from '@/pages/coaches/CoachDetails';
import CoachesList from '@/pages/coaches/CoachesList';
import ContactCoach from '@/pages/coaches/ContactCoach';
import CoachRegistration from '@/pages/requests/CoachRegistration';
import RequestsReceived from '@/pages/requests/RequestsReceived'
import notFound from '@/pages/notFound';

const router = createRouter({
  history:createWebHistory(),
  routes:[
    {path:'/',redirect:'/coaches'},
    {path:'/coaches',component:CoachesList},
    {path:'/coaches/:id',component:CoachDetails,
    children:[
      { path: 'contact', component:ContactCoach }
    ]},
    {path:'/requests',component:RequestsReceived},
    {path:'/register',component:CoachRegistration},
    {path:'/notFound(.*)',component:notFound}
  ]
})

export default router;

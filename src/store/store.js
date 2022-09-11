import {createStore} from 'vuex';

import coachesModule from './modules/coaches/index'
import requestModule from './modules/requests/index'

const store = createStore({
  modules:{
    coaches:coachesModule,
    requests:requestModule
  },
  //hardcoded until we have HTTP requests
  state(){
    return {
      userId:'c4'
    }
  },
  getters:{
    userId(state){
      return state.userId;
    }
  }
})

export default store;

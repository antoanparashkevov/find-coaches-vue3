//import Vuex parts...
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default {
  namespaced:true,
  state(){
    return {
      userId:'c4'
    }
  },
  mutations,
  getters,
  actions
}
//importing Vuex parts...
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
export default {
  namespaced:true,
  state(){
    return {
      coaches:[
        {
          id: 1,
          firstName:'Antoan',
          lastName:'Parashkevov',
          areas:['frontend','career'],
          description:'Some description 1',
          hourlyRate:30
        },
        {
          id: 2,
          firstName:'Nadia',
          lastName:'Dolashka',
          areas:['career'],
          description:'Some description 2',
          hourlyRate:40
        }
      ]
    }
  },
  mutations,
  getters,
  actions
}

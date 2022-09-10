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
          id: 'c1',
          firstName:'Antoan',
          lastName:'Parashkevov',
          areas:['frontend','career','backend'],
          description:'Some description 1',
          hourlyRate:30
        },
        {
          id: 'c2',
          firstName:'Nadia',
          lastName:'Dolashka',
          areas:['career'],
          description:'Some description 2',
          hourlyRate:40
        },
        {
          id: 'c3',
          firstName:'Svetlio',
          lastName:'Parashkevov',
          areas:['frontend','backend'],
          description:'Some description 3',
          hourlyRate:50
        },
      ]
    }
  },
  mutations,
  getters,
  actions
}

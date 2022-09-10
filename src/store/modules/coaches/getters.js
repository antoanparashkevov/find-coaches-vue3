export default {
  coaches(state){
    return state.coaches;
  },
  //predicate func
  hasCoaches(state){
    return state.coaches && state.coaches.length > 0;
  }
}

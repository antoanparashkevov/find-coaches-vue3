export default {
  coaches(state){
    return state.coaches;
  },
  //predicate func
  hasCoaches(state){
    return state.coaches && state.coaches.length > 0;
  },
  //WRONG getting the userID
  isCoach(_,getters,_2,rootGetters){
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    //predicate function that returns true/false
    return coaches.some(coach=>coach.objectId === userId)
  }
}

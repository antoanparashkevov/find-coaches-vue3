export default {
  coaches(state){
    return state.coaches;
  },
  //predicate func
  hasCoaches(state){
    return state.coaches && state.coaches.length > 0;
  },
  
  isCoach(_,getters,_2,rootGetters){
    const coaches = getters.coaches;
    const userId = rootGetters['auth/userId'];
    //predicate function that returns true/false
    return coaches.some(coach=>coach.coachId === userId)
  },
  shouldUpdate(state){
   const lastFetch= state.lastFetch 
    //if it's falsy (at the beginning it is)
    if(!lastFetch){
      return true;
    }
    const currentTimestamp = new Date().getTime()
    
    //we deduct two timestamp (using milliseconds) variables.
    //return true if it's bigger than 60 seconds (1 minute)
    return (currentTimestamp - lastFetch) / 1000 > 60;
  }
}

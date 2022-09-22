export default {
  registerCoach(state,payload){
    state.coaches.push(payload);
  },
  setCoaches(state,payload){
    //We assume that the payload is all fetched coaches from the backend
    state.coaches = payload;
  },
  setLastTimestamp(state){
    state.lastFetch = new Date().getTime()
  }
}

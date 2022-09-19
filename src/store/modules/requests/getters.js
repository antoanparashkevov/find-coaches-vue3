export default {
  requests(state,_,_2,rootGetters){
    const coachId = rootGetters.userId;
    //will return new filtered array
    return state.requests.filter(request=>request.coachId === coachId);
  },
  hasRequests(_,getters){
    return getters.requests && getters.requests.length>0;
  }
}

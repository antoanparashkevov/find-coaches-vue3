export default {
  addRequest(state, payload) {
    state.requests.push(payload)
  },
  loadRequest(state,payload){
    //We assume that the payload is all fetched requests from the backend
    state.requests = payload
  }
}

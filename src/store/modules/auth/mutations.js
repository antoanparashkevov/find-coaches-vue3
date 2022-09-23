export default {
  setAuthentication(state,payload){
    state.idToken = payload.token;
    state.userId = payload.id;
  },
  autoLogout(state){
    state.autoLogout = true;
  }
}
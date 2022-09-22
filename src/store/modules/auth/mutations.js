export default {
  setAuthentication(state,payload){
    state.idToken = payload.token;
    state.userId = payload.id;
    state.expiresIn = payload.expires
  }
}
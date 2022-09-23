export default {
  userId(state) {
    return state.userId;
  },
  token(state){
    return state.idToken
  },
  isAuthenticated(state){
    return !!state.idToken;
  },
  didAutoLogout(state){
    return state.autoLogout
  }
}
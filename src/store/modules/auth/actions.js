export default {
  async auth(context,payload) {
    const response = await fetch(
      (payload.isLogin ? payload.loginAPI : payload.registerAPI)
      + payload.apiKey, {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })
    
    const responseData = await response.json()
    
    if(response.ok === false){
      //TODO error handling
      throw new Error(responseData.message || 'Failed to authenticate. Please try again later!')
    }
    //localId actually is userId
    context.commit('setAuthentication', {
      token: responseData.idToken,
      id: responseData.localId,
      expires: responseData.expiresIn
    })
  },
  logout(context){
    context.commit('setAuthentication', {
      token: null,
      id: null,
      expires: null
      })
  }
};
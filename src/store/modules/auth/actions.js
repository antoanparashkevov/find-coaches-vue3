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
    localStorage.setItem('token',responseData.idToken);
    localStorage.setItem('userId',responseData.localId);
    
    //localId actually is userId
    context.commit('setAuthentication', {
      token: responseData.idToken,
      id: responseData.localId,
      expires: responseData.expiresIn
    })
  },
  autoLogin(context){
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('userId')
    context.commit('setAuthentication', {
      token,
      id
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
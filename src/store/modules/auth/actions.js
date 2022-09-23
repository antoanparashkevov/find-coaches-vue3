let timer;
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
    
    //from seconds to milliseconds (*1000)
    const expiresIn = +responseData.expiresIn * 1000

    //current date + expiresIn (in milliseconds)
    const expirationDate = new Date().getTime() + expiresIn;
    
    localStorage.setItem('token',responseData.idToken);
    localStorage.setItem('userId',responseData.localId);
    localStorage.setItem('tokenExpiration',expirationDate);

    timer = setTimeout(function(){
      context.dispatch('autoLogout')
    },expiresIn)
    
    //localId actually is userId
    context.commit('setAuthentication', {
      token: responseData.idToken,
      id: responseData.localId,
    })
  },
  autoLogin(context){
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('userId')
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    
    //how many time it left for automatically logging out
    const expiresIn = +tokenExpiration - new Date().getTime();
    
    //10 seconds
    if(expiresIn < 10000){
      return;
    }
    
    timer = setTimeout(()=>{
      context.dispatch('autoLogout')
    },expiresIn)
    
    context.commit('setAuthentication', {
      token,
      id
    })
  },
  logout(context){
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('tokenExpiration')
    
    clearTimeout(timer);
    
    context.commit('setAuthentication', {
      token: null,
      id: null,
      })
  },
  autoLogout(context){
    context.dispatch('logout');
    context.commit('autoLogout');
  }
};
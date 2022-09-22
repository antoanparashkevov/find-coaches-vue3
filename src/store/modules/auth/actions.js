export default {
  async signup(context,payload) {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyACNi0ZXvS3pT7HcDoYK4-v7O6dOhhGSZI', {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })
    
    const responseData = await response.json()
    
    if(response.ok === false){
      console.log(responseData)
      //TODO error handling
    }
    console.log(responseData)
    
    context.commit('setAuthentication', {
      token: responseData.idToken,
      id: responseData.localId,
      expires: responseData.expiresIn
    })
  }
};
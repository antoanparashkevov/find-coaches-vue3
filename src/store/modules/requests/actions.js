export default {
  async addRequest(context, payload){
    const newRequest = {
      email:payload.email,
      message:payload.message
    }
    
    const response = await fetch(`https://find-a-coach-4d753-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest)
    })
    //{name: '-NC_HetTsAemSst06TpY'}
    const responseData = await response.json();
    
    //new key-value pair for the individual req which was posted.
    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;
    
    if(response.ok === false){
      throw new Error(responseData.message || 'Failed to post the contact message!')
    }
    
    context.commit('addRequest',newRequest)
  },
  async loadRequests(context) {
    const userId = context.rootGetters['auth/userId'];
    const token = context.rootGetters['auth/token']
    const response = await fetch(`https://find-a-coach-4d753-default-rtdb.firebaseio.com/requests/${userId}.json?auth=${token}`)
    const responseData = await response.json()
    
    //Error handling
    if(response.ok === false){
      throw new Error(responseData.message || 'Failed to fetch the requests!')
    }

    const requests = [];

    for(const reqId in responseData){
      const request = {
        id: reqId,
        coachId:userId,
        email:responseData[reqId].email,
        message:responseData[reqId].message,
      }
      requests.push(request)
    }

    context.commit('loadRequest',requests)
  }

}

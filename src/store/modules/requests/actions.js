export default {
  async addRequest(context, payload){
    const newRequest = {
      coachId: payload.coachId,
      email:payload.email,
      message:payload.message
    }
    
    const response = await fetch(`https://find-a-coach-4d753-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest)
    })
    const responseData = await response.json();
    
    if(response.ok === false){
      throw new Error(responseData.message || 'Failed to post the contact message!')
    }
    
    context.commit('addRequest',newRequest)
  },
  async loadRequests(context) {
    const userId = context.rootState.userId
    const response = await fetch(`https://find-a-coach-4d753-default-rtdb.firebaseio.com/requests/${userId}.json`)
    const responseData = await response.json()
    if(response.ok === false){
      throw new Error(responseData.message || 'Failed to fetch the requests!')
    }

    const requests = [];

    for(const reqId in responseData){
      const request = {
        coachId:responseData[reqId].coachId,
        email:responseData[reqId].email,
        message:responseData[reqId].message,
      }
      requests.push(request)
    }

    context.commit('loadRequest',requests)
  }

}

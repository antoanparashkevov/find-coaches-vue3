export default {
  async addRequest(context, payload){
    const newRequest = {
      coachId: payload.coachId,
      email:payload.email,
      message:payload.message
    }
    
    const response = await fetch('https://parseapi.back4app.com/classes/requests', {
      method: 'POST',
      headers: {
      'X-Parse-Application-Id': '63u3mbmETZ0kesrnNGo1XTas8yKa8HdbqYdbj2sf',
      'X-Parse-REST-API-Key': 'oU9VIRLkWZlFbxozm4ZcY13n1tCOnQY2usqgaPSi',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRequest)
    })
    const responseData = response.json();
    
    
    context.commit('addRequest',newRequest)
  }

}

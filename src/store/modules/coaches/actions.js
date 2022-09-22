export default {
  async registerCoach(context,payload){
    //payload is a data that is coming from a mutation
    //with context, we can commit this mutation
    const coachData = {
      firstName:payload.first,
      lastName:payload.last,
      areas:payload.areas,
      description:payload.desc,
      hourlyRate:payload.rate,
    }
    const response = await fetch(`https://parseapi.back4app.com/classes/coaches`, {
      method:'POST',
      body:JSON.stringify(coachData),
      headers:{
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': '63u3mbmETZ0kesrnNGo1XTas8yKa8HdbqYdbj2sf',
        'X-Parse-REST-API-Key': 'oU9VIRLkWZlFbxozm4ZcY13n1tCOnQY2usqgaPSi',
      }
    })

    const responseData = await response.json()

    const userId = responseData.objectId
    context.rootState.userId = userId;

    console.log(userId)

    if(response.ok === false){
      //TODO
    }



    context.commit('registerCoach',{
      ...coachData,
      id:userId
    })
  },
  async loadCoaches(context){
    const response = await fetch('https://parseapi.back4app.com/classes/coaches',{
      method: 'GET',
      headers:{
          'X-Parse-Application-Id': '63u3mbmETZ0kesrnNGo1XTas8yKa8HdbqYdbj2sf',
          'X-Parse-REST-API-Key': 'oU9VIRLkWZlFbxozm4ZcY13n1tCOnQY2usqgaPSi',
      }
    })
   
    const responseData = await response.json();
    // console.log(responseData.results)
    
    if(!response.ok){
      //{code: 1, message: 'Internal server error.'}
      throw new Error(responseData.message || 'Something went wrong!');
    }



    context.commit('setCoaches',responseData.results)
  }
}


export default {
  async registerCoach(context,payload){
    const userId = context.rootState.userId
    //payload is a data that is coming from a mutation
    //with context, we can commit this mutation
    
    const coachData = {
      firstName:payload.first,
      lastName:payload.last,
      areas:payload.areas,
      description:payload.desc,
      hourlyRate:payload.rate,
    }
    const response = await fetch(`https://find-a-coach-4d753-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
      method:'PUT',
      body:JSON.stringify(coachData),
    })

    const responseData = await response.json()
    console.log(responseData);
    
    if(response.ok === false){
      //TODO
    }
    context.commit('registerCoach', responseData)
  },
  async loadCoaches(context){
    const response = await fetch('https://find-a-coach-4d753-default-rtdb.firebaseio.com/coaches.json')
   
    const responseData = await response.json();
    console.log(responseData)
    
    if(!response.ok){
      //{code: 1, message: 'Internal server error.'}
      throw new Error(responseData.message || 'Something went wrong!');
    }
  
    const coaches = [];
    
    for(const coachId in responseData){
      const coach = {
        coachId:coachId,
        firstName:responseData[coachId].firstName,
        lastName:responseData[coachId].lastName,
        areas:responseData[coachId].areas,
        description:responseData[coachId].description,
        hourlyRate:responseData[coachId].hourlyRate,
      }
      coaches.push(coach)
    }
    console.log(coaches)

    context.commit('setCoaches',coaches)
  }
}


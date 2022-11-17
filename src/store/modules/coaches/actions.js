export default {
  async registerCoach(context,payload){
    const coachId = context.rootGetters['auth/userId'];
    const token = context.rootGetters['auth/token'];
    //payload is a data that is coming from a mutation
    //with context, we can commit this mutation
    const coachData = {
      firstName:payload.first,
      lastName:payload.last,
      areas:payload.areas,
      description:payload.desc,
      hourlyRate:payload.rate,
    }
    const response = await fetch(`https://find-a-coach-4d753-default-rtdb.firebaseio.com/coaches/${coachId}.json?auth=${token}`, {
      method:'PUT',
      body:JSON.stringify(coachData),
    })

    const responseData = await response.json()
    if(response.ok === false){
      throw new Error(responseData.message || 'Due to internal error, you can\t register as a coach!')
    }
    context.commit('registerCoach', { 
      ...responseData,
      coachId
    })
  },
  async loadIndividualCoach(context,payload) {
    const response = await fetch(`https://find-a-coach-4d753-default-rtdb.firebaseio.com/coaches/${payload.coachId}.json`,
      { method: 'GET' })
    
    const responseData = await response.json();
    if(response.ok === false) {
      throw new Error(responseData.message || 'Due to internal error, you can\t see this coach details information')
    }
    
    context.commit('loadIndividualCoach', responseData)
    
  },
  async loadCoaches(context, payload){
    //if these two properties are falsy
    if(!payload.forceRefresh && !context.getters.shouldUpdate){
      return;//not fetching the data
    }
    //Get request to the backend
    const response = await fetch('https://find-a-coach-4d753-default-rtdb.firebaseio.com/coaches.json');
   
    const responseData = await response.json();
    
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

    context.commit('setCoaches',coaches)
    context.commit('setLastTimestamp');
  }
}


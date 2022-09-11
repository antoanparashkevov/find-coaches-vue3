export default {
  registerCoach(context,payload){
    //payload is a data that is coming from a mutation
    //with context, we can commit this mutation
    const coachData = {
      id:'c3',
      firstName:payload.first,
      lastName:payload.last,
      areas:payload.areas,
      description:payload.desc,
      hourlyRate:payload.rate,
    }

    context.commit('registerCoach',coachData)
  }
}
//           id: 'c1',
//           firstName:'Antoan',
//           lastName:'Parashkevov',
//           areas:['frontend','career','backend'],
//           description:'Some description 1',
//           hourlyRate:30

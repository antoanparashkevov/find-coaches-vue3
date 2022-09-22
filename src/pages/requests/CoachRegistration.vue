<template>
  <base-dialog :show='!!error' title='We have an internal server problem!' @close='handleError'>
    <p>{{error}}</p>
    <template v-slot:actions>
      <base-button link to='/coaches' mode='outline'>Main Page</base-button>
      <base-button mode='outline' @click='handleError'>Close</base-button>
    </template>
  </base-dialog>
  <section>
   <base-card>
     <h2>Register as a coach now!</h2>
     <coach-form @save-data='saveData'></coach-form>
   </base-card>
  </section>
</template>

<script>
import CoachForm from '../../coaches/CoachForm';
export default {
  name: 'CoachRegistration',
  components:{
    CoachForm
  },
 data: ()=>{
   return {
     error: null
   }
 },
  methods:{
    async saveData(data){
      try{
        await this.$store.dispatch('coaches/registerCoach',data)
      }catch (error){
        this.error = error;
        return;
      }
      //replace or push but with replace we can't go back into previous page
      this.$router.replace('/coaches');
    },
    handleError(){
      this.error = null;
    }
  }
};
</script>

<style scoped>

</style>

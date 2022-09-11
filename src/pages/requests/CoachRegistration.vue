<template>
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
  methods:{
    saveData(data){
      console.log(data)
      this.$store.dispatch('coaches/registerCoach',data)

      //replace or push but with replace we can't go back into previous page
      this.$router.replace('/coaches');
    }
  }
};
</script>

<style scoped>

</style>

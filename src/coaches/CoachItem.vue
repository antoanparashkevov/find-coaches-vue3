<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <span v-for='area in areas' :key='area'>{{area}}</span>
    </div>
    <div class='actions'>
      <router-link :to='detailsCoachLink'>Details</router-link>
      <router-link :to='contactCoachLink'>Contact</router-link>
    </div>
  </li>
</template>

<script>
export default {
  props:['id','firstName','lastName','rate','areas'],
  computed:{
    fullName(){
      return this.firstName + ' ' + this.lastName
    },
    contactCoachLink(){
      return this.$route.path + '/' + this.id + '/contact'
    },
    detailsCoachLink(){
      return this.$route.path + '/' + this.id
    }
  }
};
</script>

<style scoped>

</style>

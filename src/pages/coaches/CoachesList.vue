<template>
<section>
  FILTER
</section>
  <section>
    <div class='controls'>
      <button>Refresh</button>
      <router-link to='/register'>Register</router-link>
    </div>
    <div>
    <ul v-if='hasCoaches'>
      <li v-for='coach in coaches' :key='coach.id'>
        {{coach.firstName}}
      </li>
    </ul>
      <h3 v-else>No coaches found!</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CoachesList',
  computed:{
    coaches(){
      return this.$store.getters['coaches/coaches']
    },
    hasCoaches(){
      return this.$store.getters['coaches/hasCoaches']
    }
  }
};
</script>

<style scoped>

</style>

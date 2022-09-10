<template>
  <section>
    <base-card>
      <h3>{{ fullName }}</h3>
      <h4>${{ rate }}/hour</h4>
    </base-card>
  </section>
  <section>
    <base-card>
     <header>
       <h2>Interested? Reach them out!</h2>
       <base-button link :to='contactCoachLink'>Contact</base-button>
     </header>
<!--      for contact page... -->
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for='area in areas' :key='area' :type='area' :title='area'></base-badge>
      {{description}}
    </base-card>
  </section>
</template>

<script>
export default {
  name: 'CoachDetails',
  props: ['id'],
  computed: {
    rate(){
      return this.selectedCoach.hourlyRate
    },
    areas(){
      return this.selectedCoach.areas
    },
    description(){
      return this.selectedCoach.description
    },
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    contactCoachLink() {
      return this.$route.path + '/' + this.id + '/contact';
    }
  },
  data() {
    return {
      selectedCoach: {}
    };
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find((coach) => coach.id === this.id);
  }
};
</script>

<style scoped>

</style>

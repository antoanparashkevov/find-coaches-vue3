<template>
  <div>
    <section>
      <base-card>
        <h3>{{ fullName }}</h3>
        <h4>${{ rate }}/hour</h4>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge v-for='area in areas' :key='area' :type='area' :title='area'></base-badge>
        <p>{{description}}</p>
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
  </div>
</template>

<script>
export default {
  name: 'CoachDetails',
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
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
      if(this.$route.path.includes('contact')){
        return this.$route.path
      }
      return this.$route.path + '/contact';
    }
  },
  created() {
    // this.selectedCoach = this.$store.getters['coaches/coaches']
    //   .find(
    //     (coach) => coach.coachId === this.id
    //   );
    this.selectedCoach = this.$store.state.coaches[0]
  }
};
</script>

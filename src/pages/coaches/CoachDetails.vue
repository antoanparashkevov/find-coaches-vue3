<template>
  <div>
    <section>
      <base-card>
        <h3>{{ getSelectedCoach.firstName }} {{getSelectedCoach.lastName}}</h3>
        <h4>${{ getSelectedCoach.hourlyRate }}/hour</h4>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge v-for='area in getSelectedCoach.areas' :key='area' :type='area' :title='area'></base-badge>
        <p>{{getSelectedCoach.description}}</p>
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
  computed: {
    contactCoachLink() {
      if(this.$route.path.includes('contact')){
        return this.$route.path
      }
      return this.$route.path + '/contact';
    },
    getSelectedCoach(){
      const allCoaches = this.$store.getters['coaches/coaches']
      return allCoaches
        .find(coach=>coach.coachId === this.$props.id) || []
    }
  },
  methods: {
    async loadCoaches(refresh = true) {
      try{
        await this.$store.dispatch('coaches/loadCoaches', {forceRefresh: refresh})
      }
      catch (error){
        this.error = error;
      }
    },
  },
  created() {
    this.loadCoaches(true)
  }
};
</script>

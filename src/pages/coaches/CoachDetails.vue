<template>
  <div v-if='hasCoach'>
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
  data: function() {
    return {
      error: null  
    }
  },
  computed: {
    hasCoach() {
      return this.$store.getters['coaches/hasCoach']
    },
    contactCoachLink() {
      if(this.$route.path.includes('contact')){
        return this.$route.path
      }
      return this.$route.path + '/contact';
    },
    getSelectedCoach() {
        return this.$store.getters['coaches/selectedCoach']
    }
  },
  methods: {
    async loadIndividualCoach() {
      try {
        await this.$store.dispatch('coaches/loadIndividualCoach',{coachId: this.$props.id})
      } catch (err) {
        this.error = err;
      }
    }
  },
  created() {
    this.loadIndividualCoach()
  }
};
</script>

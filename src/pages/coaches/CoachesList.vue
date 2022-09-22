<template>
  <base-dialog :show='!!error' @close='handleError' title='An error occurred!'>
    <p>{{error}}</p>
  </base-dialog>
  <section>
    <filter-coach @change-areas='setFilter'></filter-coach>
  </section>
  <base-card>
    <section>
      <div class='controls'>
        <base-button mode='outline' @click='loadCoaches(true)'>Refresh</base-button>
        <base-button link v-if='!isCoach && !isLoading' to='/register'>Register as a Coach</base-button>
      </div>
      <div>
        <div v-if='isLoading'>
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if='hasCoaches && !isLoading'>
          <coach-item v-for='coach in coaches'
                      :key='coach.coachId'
                      :id='coach.coachId'
                      :first-name='coach.firstName'
                      :last-name='coach.lastName'
                      :rate='coach.hourlyRate'
                      :areas='coach.areas'
          ></coach-item>
        </ul>
        <h3 v-else>No coaches found!</h3>
      </div>
    </section>
  </base-card>
</template>

<script>
import CoachItem from '../../coaches/CoachItem';
import FilterCoach from '../../coaches/FilterCoach';
import BaseButton from '../../ui/BaseButton';

export default {
  name: 'CoachesList',
  components: {
    BaseButton,
    CoachItem,
    FilterCoach
  },
  data() {
    return {
      error: null,
      isLoading: false,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  methods: {
    setFilter(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(refresh = false){
      this.isLoading = true
      try{
       await this.$store.dispatch('coaches/loadCoaches',{forceRefresh:refresh })
     }
     catch (error){
       this.error = error;
     }
      this.isLoading = false;
    },
    handleError(){
      this.error = null;
    }
  },
  created(){
    this.loadCoaches(false)
  },
  computed: {
    isCoach(){
      return this.$store.getters['coaches/isCoach'];
    },
    coaches() {
      const allCoaches = this.$store.getters['coaches/coaches'];//an array
      //this will return new array with filtered coaches.
      return allCoaches.filter((coach) => {
        if (coach.areas.includes('frontend') && this.activeFilters.frontend) {
          return true;
        }
        if (coach.areas.includes('backend') && this.activeFilters.backend) {
          return true;
        }
        return coach.areas.includes('career') && this.activeFilters.career;

      });
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
      
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

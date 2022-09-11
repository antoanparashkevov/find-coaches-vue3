<template>
  <section>
    <filter-coach @change-areas='setFilter'></filter-coach>
  </section>
  <base-card>
    <section>
      <div class='controls'>
        <base-button mode='outline'>Refresh</base-button>
        <base-button link mode='flat' to='/register'>Register</base-button>
      </div>
      <div>
        <ul v-if='hasCoaches'>
          <coach-item v-for='coach in coaches'
                      :key='coach.id'
                      :id='coach.id'
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
    }
  },
  computed: {
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
      return this.$store.getters['coaches/hasCoaches'];
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

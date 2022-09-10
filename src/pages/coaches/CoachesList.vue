<template>
  <base-card>
    <section>
      FILTER
    </section>
  </base-card>
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
import BaseButton from '../../ui/BaseButton';

export default {
  components: {
    BaseButton,
    CoachItem
  },
  name: 'CoachesList',
  computed: {
    coaches() {
      return this.$store.getters['coaches/coaches'];
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

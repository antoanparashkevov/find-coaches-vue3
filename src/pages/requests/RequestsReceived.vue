<template>
  <base-card>
    <header>
      <h2>Requests received</h2>
    </header>
    <div>
      <ul v-if='hasRequests'>
        <request-item v-for='req in requestsList'
                      :key='req.id'
                      :email='req.email'
                      :message='req.message'></request-item>
      </ul>
      <h3 v-else>You don't have any received requests!</h3>
    </div>
  </base-card>
</template>

<script>
import RequestItem from '../../requests/RequestItem';

export default {
  components: {
    RequestItem
  },
  computed: {
    requestsList() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    }
  }
};
</script>

<style>
header{
  text-align: center;
}
ul{
  list-style: none;
  max-width: 30rem;
  margin:2rem auto;
  padding:0;
}
h3{
  text-align: center;
}
</style>

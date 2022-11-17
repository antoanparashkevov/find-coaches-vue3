<template>
  <div>
  <base-dialog :show='!!error' @close='handleError' title='Failed to fetch the requests'>
    <p>{{error}}</p>
  </base-dialog>
  <base-card>
    <header>
      <h2>Requests received</h2>
    </header>
    <div>
      <base-spinner v-if='isLoading'></base-spinner>
      <ul v-else-if='hasRequests && !isLoading'>
        <request-item v-for='req in requestsList'
                      :key='req.id'
                      :email='req.email'
                      :message='req.message'></request-item>
      </ul>
      <h3 v-else>You don't have any received requests!</h3>
    </div>
  </base-card>
  </div>
</template>

<script>
import RequestItem from '../../requests/RequestItem';

export default {
  components: {
    RequestItem
  },
  data(){
    return{
      error:null,
      isLoading: false
    }
  },
  computed: {
    requestsList() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return !this.isLoading && this.$store.getters['requests/hasRequests'];
    }
  },
  methods:{
    async loadRequests(){
      this.isLoading = true;
      try{
      await this.$store.dispatch('requests/loadRequests')
      }catch (error){
        this.error = error;
      }
      this.isLoading = false;
    },
    handleError(){
      this.error = null;
    }
  },
  created(){
    this.loadRequests()
  }
};
</script>

<style scoped>
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

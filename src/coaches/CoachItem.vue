<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge v-for='area in areas' :key='area' :type="area" :title="area"></base-badge>
    </div>
    <div class='actions'>
      <base-button link mode='outline' :to='detailsCoachLink'>Details</base-button>
      <base-button link :to='contactCoachLink'>Contact</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props:['id','firstName','lastName','rate','areas'],
  computed:{
    fullName(){
      return this.$props.firstName + ' ' + this.$props.lastName
    },
    contactCoachLink(){
      return this.$route.path + '/' + this.$props.id + '/contact'
    },
    detailsCoachLink(){
      return this.$route.path + '/' + this.$props.id
    }
  }
};
</script>

<style scoped>
li{
  margin:1rem 0;
  border: 1px solid #424242;
  list-style: none;
  padding: 1rem;
  border-radius: 12px;
}
h3{
  font-size: 1.5rem;
}
h3,h4{
  margin:0.5rem 0;
}
div{
  margin: 0.5rem 0;
}
.actions{
  display:flex;
  justify-content: flex-end;
}
</style>

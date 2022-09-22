<template>
  <base-card>
    <form @submit.prevent='submitForm'>
      <div class='form-control' :class='{invalid:email.isValid === false}'>
        <label for='email'>E-mail</label>
        <input type='email' id='email' v-model.trim='email.val'>
      </div>
      <div class='form-control' :class='{invalid:password.isValid === false}'>
        <label for='password'>Password</label>
        <input type='password' id='password' v-model.trim='password.val'>
      </div>
      <p class='error' v-if='formIsValid === false'>Please enter a valid credentials</p>
      <base-button>Login</base-button>
      <base-button link mode='flat'>Sign up instead</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  name: 'userAuth',
  data: ()=>{
    return {
      email: { 
        val: '',
        isValid: true
      },
      password:{
        val: '',
        isValid: true
      },
      formIsValid:true
    }
  },
  methods:{
    validateForm(){
      if(this.email.val === '' || this.email.val.includes('@') === false){
        this.email.isValid = false;
        this.formIsValid= false
      }if(this.password.val === '' || this.password.val.length<6){
        this.password.isValid = false;
        this.formIsValid= false
      }
    },
    submitForm(){
      this.formIsValid = true;
      if(this.formIsValid === false){
        return;
      }
      
      //TODO http requests.. for login and register
    }
  }
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}
.form-control{
  margin:0.5rem 0;
}
label{
  font-weight: bold;
  display:block;
  margin-bottom:0.5rem;
}

input{
  display:block;
  width: 100%;
  border:1px solid #ccc;
  font:inherit;
}
input:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

/*for validation*/
.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

.error {
  font-size: 18px;
  font-weight: bold;
}
</style>
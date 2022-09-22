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
      <base-button>{{ submitButtonCaption }}</base-button>
      <base-button type='button' mode='flat' @click='switchAuthMode'>{{ switchModeCaption }}</base-button>
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
      formIsValid:true,
      mode: 'login'
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
      this.validateForm()
      if(this.formIsValid === false){
        return;
      }
      const authData = {
        email: this.email,
        password: this.password
      }
      if(this.mode === 'login'){
        //TODO http request for login
      } else{
        this.$store.dispatch('auth/signup', authData)
      }
    },
    switchAuthMode(){
      if(this.mode === 'login'){
        this.mode = 'signup'
      }else{
        this.mode = 'login'
      }
    }
  },
  computed:{
    submitButtonCaption(){
      if(this.mode === 'login'){
        return 'Login'
      }else{
        return 'Signup'
      }
    },
    switchModeCaption(){
      if(this.mode === 'login'){
        return 'Signup instead'
      }else {
        return 'Login instead'
      }
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
  font-size: 15px;
  font-weight: bold;
  color: red;
}
</style>
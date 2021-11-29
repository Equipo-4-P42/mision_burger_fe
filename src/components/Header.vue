<template>
  <div class="section">
      <div class="banner">
        <div class="buttons">
          <ul>
            <router-link to="/home"><li v-if="!is_auth"><a href=""> Home</a></li></router-link>
            <router-link to="/user/login"><li v-if="!is_auth">Iniciar Sesión</li></router-link>
            <router-link to="/user/signUp"><li v-if="!is_auth">Registrarse</li></router-link>  
          </ul>

        </div>
      </div>
    </div>

</template>

<script>
export default {
  name:"Header",
  data:function(){
    return{
      is_auth:false
    }
  },

  methods:{
  
  }
}
</script>

<style>
.section {
  width: 100%;
  background-color: white;
}
.banner {
  height: 340px;
  max-width: 100%;
  background-image: url("../assets/banner.png");
  background-size: cover;
  position: relative;
}
.buttons {
  float: right;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  flex-direction: row;
  padding-top: 23px;
  margin-right: 50px;
}
.buttons ul{
  display: flex;
  gap:5%;
  align-items: center;
  justify-content: center;
}
.buttons ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 15px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  height: 50px;
  width: 100px;
  border: none;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
}
.buttons ul a{
  text-decoration: none;
}
.buttons ul{
  list-style: none;
  
}
.buttons li:hover {
  background-color: rgb(238, 236, 236);
}
</style>
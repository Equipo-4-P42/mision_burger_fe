<template>
  <h1 class="h1_description_menu">Iniciar Sesión</h1>
  <div class="login-box-container">
    <div class="login-boxx">
      <form>
        <!--username-->
        <label for="username ">Usuario</label>
        <input name="username" type="text" placeholder="Digite Usuario " />
        <!--password-->
        <label class="password-label" for="password ">Contraseña</label>
        <input name="password" type="password" placeholder="Digite Contraseña" />
        <input type="submit" value="INGRESAR" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
};
</script>

<style>
.login-box-container{
  display: flex;
  justify-content: center;
  width: 100%;
}
.login-boxx{
  display: flex;
  margin-top: 2%;
  margin-bottom: 4%;
  justify-content: center;
  width: 300px;
}   

.login-boxx form{
  display: flex;

  flex-direction: column;
    justify-content: center;
    align-items: center;
  width: 100%;
  border-radius: 10px;
   background-color: #9C2713;
}

.password-label{
  margin-top: 15px;
}
form input{
  text-align: center;
  height: 40px;
  border:none;
  width: 80%;
  border-radius: 10px;
}
form input[type="submit"]{
  margin-top: 20px;
  margin-bottom: 30px;
  cursor: pointer;
  background-color: white;
  font-weight: bold;
}
form input[type="submit"]:hover{
background-color: rgb(241, 241, 241);
}
</style>
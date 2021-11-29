<template>
  <h1 class="h1_description_menu">Registro de Usuario</h1>
  <div class="register-box-container">
    <div class="register-boxx">
      <form>
        <!--username-->
        <label for="name">Nombre</label>
        <input name="name" type="text" placeholder="Digite Nombre " />
        <!--username-->
        <label for="direction">Dirección</label>
        <input name="direction" type="text" placeholder="Digite Dirección " />
        <!--username-->
        <label for="telephone">Teléfono</label>
        <input name="telephone" type="text" placeholder="Digite Teléfono " />
        <!--username-->
        <label for="email">Correo Electrónico</label>
        <input name="email" type="email" placeholder="Digite Correo " />
        <!--username-->
        <label for="user">Usuario</label>
        <input name="user" type="text" placeholder="Digite Usuario " />
        <!--password-->
        <label class="password-label" for="password ">Contraseña</label>
        <input name="password" type="password" placeholder="Digite Contraseña" />
        <!--Botón-->
        <input type="submit" value="REGISTRARSE" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name:"singUp",
}
</script>

<style>
.register-box-container{
  display: flex;
  justify-content: center;
  width: 100%;
}
.register-boxx{
  display: flex;
  margin-top: 2%;
  margin-bottom: 4%;
  justify-content: center;
  width: 300px;
}   

.register-boxx form{
  display: flex;

  flex-direction: column;
    justify-content: center;
    align-items: center;
  width: 100%;
  border-radius: 10px;
   background-color: #9C2713;
}
form label{
  font-size: 30px;
  color:white;
  margin-bottom: 15px;
  margin-top: 15px;
}
.password-label{
  margin-top: 15px;
}

</style>
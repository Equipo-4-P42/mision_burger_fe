<template>
  <h1 class="h1_description_menu">Reserva tu mesa</h1>
  <div class="register-box-container">
    <div class="register-boxx">
      <form>
        <!--username-->
        <label for="name">Fecha de reserva</label>
        <input name="name" type="date" placeholder="Elija Fecha de reserva " />
        <!--username-->
        <label for="direction">Hora</label>
        <input name="direction" type="text" placeholder="Elija Hora " />
        <!--username-->
        <label for="telephone">Cantidad de Personas</label>
        <input name="telephone" type="text" placeholder="Digite Cantidad de Personas " />
        <!--username-->
        <label for="email">Observación</label>
        <input name="email" type="email" placeholder="alguna Observación adicional?" />
        
        <input type="submit" value="CONFIRMAR RESERVA" />
      </form>
    </div>
    
  </div>
  <h1 class="tf">Recuerda que las reservas podrán hacerse minimo con 24 horas de antelación</h1>
</template>

<script>
export default {
  name:"Reservation",
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
.tf{
  color: red;
  font-family: impact;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 5px;
  word-spacing: 8px;
  margin-top: 2%;
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
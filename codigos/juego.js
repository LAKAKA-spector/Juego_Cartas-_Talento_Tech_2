function repartir(){
   numero = Math.floor(Math.random() * 52) +1;

  //Obetener contenedor u objeto de despliegue de las cartas (mesa)
  mesa = document.getElementById("mesa");
  
   //Crear una imagen para en el documento html
   carta = document.createElement("img");
   //Obtener la imagen de la carta
   carta.src = "imagenes/Cartas/Carta" + numero + ".JPG";

   //agregar la imagen al contenedor
   mesa.appendChild(carta);


   window.alert(numero);

}
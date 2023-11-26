const comenzarJuego = () => {
  console.log("ver funcion");
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  console.log(numeroAleatorio);
  
const formulariojuego = document.querySelector("form");

formulariojuego.addEventListener("submit", obtenerNumero  = (e) => {
    e.preventDefault();
    //console.log(e);
  
    const inputNumero = parseInt(document.querySelector(".form-control").value);
    console.log(inputNumero);
    
  if (inputNumero >= 1 && inputNumero <= 100) {
    if (inputNumero === numeroAleatorio) {
        alert("Adivinaste el número");
        console.log(numeroAleatorio);
      } else if (inputNumero > numeroAleatorio) {
        alert("No adivinaste, el numero que ingresaste es mayor que el mágico");
        console.log(numeroAleatorio);
      } else {
        alert("No adivinaste, el numero que ingresaste es menor que el mágico");
        console.log(numeroAleatorio);
      }
     
  }else{
    alert("Ingresa un número del 1 al 100");
  }
 
  })

};



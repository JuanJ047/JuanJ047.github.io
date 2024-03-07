// Botón para subir
//-------------------

// Busca un elemento con el ID "arriba" y lo almacena en la variable "arriba",...
const arriba = document.getElementById("arriba")
// Agrega un "escuchador" de eventos que espera a que hagas click en el botón.
arriba.addEventListener("click", () => {
    //Hace que la ventana (nuestra pág) se desplace a la posicion verticual 0...
    window.scrollTo(0,0);
});

//Busca nuevamente el elemento con el ID "arriba" y lo almacena en la variable "buttonUP"
buttonUp = document.getElementById("arriba");

//Agrega una función que se ejecuta cada vez que ocurre un desplazamiento (scroll) en la página.
window.onscroll = function(){
    //Obtiene la cantidad de desplazamiento vertical de la página y lo almacena en la variable...
    var scroll = document.documentElement.scrollTop;

    //Si el desplazamiento es mayor a 500 píxeles...
    if (scroll > 500){
        // Cambia el tamaño (escala) del botón par que haga el efecto de aparecer al llegar.
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 500) {
        // Si el despazamiento es menor a 500 pixeles, cambia el tamaño del botón para hacerlo
        buttonUp.style.transform = "scale(0)";
    }
}
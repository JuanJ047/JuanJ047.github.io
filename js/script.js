const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");

const munieco = document.querySelector(".contenedormunieco");
const contenedor = document.querySelector(".contenedor-parrafo");
const resultado = document.querySelector(".texto-resultado");

const matriz_code = [
    ["e", "enter"], // indice 0
    ["i", "imes"], // indice 1
    ["a", "ai"], // indice 2
    ["o", "ober"], // indice 3
    ["u", "ufat"], // indice 4
]

function btnEncriptar(){
    ocultarAdelante(); ///cambio
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
}

function encriptar(fraseEncriptada){
    for(let i = 0; i < matriz_code.length; i++){
       if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]

            );
       }
    }
    return fraseEncriptada;
}

function btnDesencriptar(){
    ocultarAdelante(); ///cambio
    const texto = desencriptar(campo_texto.value);
    campo_mensaje.value = texto;
}

function desencriptar(fraseDesencriptada){
    for(let i = 0; i < matriz_code.length; i++){
       if(fraseDesencriptada.includes(matriz_code[i][1])){
        fraseDesencriptada = fraseDesencriptada.replaceAll(
            matriz_code[i][1], matriz_code[i][0]

            );
       }
    }
    return fraseDesencriptada;
}

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}///cambio

function copiar(){
    var origen = document.getElementById('campo-mensaje');
    var destino = document.getElementById('campo-texto');
    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = origen.value;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    body.removeChild(copyFrom);
    destino.focus();
    document.execCommand('paste');
  }
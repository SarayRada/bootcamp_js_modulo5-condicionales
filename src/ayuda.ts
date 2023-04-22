/*
const generarNumeroAleatorio = (): number => Math.floor(Math.random() * 101);

const numeroParaAcertar: number = generarNumeroAleatorio();

type Estado = 
  "NO_ES_UN_NUMERO" 
  | "EL_NUMERO_SECRETO_ES_MAYOR"
  | "EL_NUMERO_SECRETO_ES_MENOR"
  | "ES_EL_NUMERO_SECRETO"
  | "GAME_OVER_MAX_INTENTOS";

const MAXIMO_INTENTOS: number = 5;
let numeroDeIntentos: number = 0;

const hasSuperadoElNumeroDeIntentos = (): boolean => 
    numeroDeIntentos >= MAXIMO_INTENTOS;

const muestraNumeroDeIntentos = () => {
  const intentos = document.getElementById("intentos");
  if (intentos) intentos.innerHTML = `${numeroDeIntentos} de ${MAXIMO_INTENTOS}`
  else console.error("muestraNumeroDeintentos: No se ha encontrado elemento con id intentos");
};

document.addEventListener("DOMContentLoaded", muestraNumeroDeIntentos);

const buttonDisabled = (estado  :Estado) => {
    if (estado === "GAME_OVER_MAX_INTENTOS" || estado=== "ES_EL_NUMERO_SECRETO"){
      const comprobar = <HTMLButtonElement>document.getElementById("comprobar");
      if (comprobar) comprobar.disabled = true;
      else console.error("buttonDisabled = elemento con id comprobar no se ha encontrado");
    }
}

const muestraMensajeComprobación = (texto: string, estado: Estado) => {
    let mensaje = "";

    switch(estado){
        case  "NO_ES_UN_NUMERO":
            mensaje = `${texto} no es un numero, prueba otra vez`;
            break;
        case "EL_NUMERO_SECRETO_ES_MAYOR":
            mensaje = `Lo siento ${texto} no es el número, el número que estás buscando es mayor`;
            break;
        case "EL_NUMERO_SECRETO_ES_MENOR":
            mensaje = `Lo siento ${texto} no es el número, el número que estás buscando es menor`;
            break;
        case "ES_EL_NUMERO_SECRETO":
            mensaje = "¡¡¡Enhorabuena Has acertado!!!";
            break;
        case "GAME_OVER_MAX_INTENTOS":
            mensaje = "Has superado el máximo de intentos";
            break; 
        default:
            mensaje = "No sé que ha pasado, pero no deberías estar aquí";
            break;
    }
    
    const resultado = document.getElementById("resultado");
    if (resultado) resultado.innerHTML = mensaje;
    else console.error("muestraMensajeComprobacion: No se ha encontrado elemento con id resultado");

};

const comprobarNumero = (texto:string) : Estado => {
    const numero = parseInt(texto);
    const esUnNumero = !isNaN(numero);

    if (!esUnNumero) {
        return "NO_ES_UN_NUMERO";
    }

    if (numero === numeroParaAcertar){
        return "ES_EL_NUMERO_SECRETO";
    }

    if (hasSuperadoElNumeroDeIntentos()){
        return "GAME_OVER_MAX_INTENTOS";
    }

    return numero < numeroParaAcertar
            ? "EL_NUMERO_SECRETO_ES_MAYOR"
            : "EL_NUMERO_SECRETO_ES_MENOR";
};

const handleComprobarClick = () => {
  let texto = ""
    const inputElement = <HTMLInputElement>document.getElementById("numero");
    if(inputElement) texto = inputElement.value;
    const estado = comprobarNumero(texto);
    muestraMensajeComprobación(texto, estado);
    numeroDeIntentos++;
    muestraNumeroDeIntentos();
    buttonDisabled(estado);
}; 

const botonComprobar = document.getElementById("comprobar");
if(botonComprobar) botonComprobar.addEventListener("click", handleComprobarClick);
else console.error("botonComprobar: elemento comprobar no existe");
*/
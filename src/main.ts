type Estado = 
"GAME_OVER" | 
"KEEP_PLAYING" | 
"CONSERVADOR" | 
"CAGUETA" |
"CASI"|
"WINNER"

let puntuacionUsuario = 0;

const insertarAlResultadoTexto = (textoAMostrar: string) => {
    const resultado = document.getElementById("resultado");
    if (resultado && resultado instanceof HTMLElement) {
        resultado.innerHTML = textoAMostrar
    } else {
        console.error("mostrarPuntuación: el elemento con id resultado no tiene valor");
    }
}

const imprimirCarta = (url: string) => {
    const ElementoCarta = document.getElementById("imagen-carta");
    if(ElementoCarta && ElementoCarta instanceof HTMLImageElement) {
        ElementoCarta.src = url;
    } else {
        console.error("imprimirCarta: el elemento imagen-carta no se ha encontrado")
    }
}

const mostrarCarta = (carta: number) : void => {
    switch(carta){               
            case 1:
                imprimirCarta("../img/1_as-copas.jpg");
                break;
            case 2:
                imprimirCarta("../img/2_dos-copas.jpg");
                break;               
            case 3:
               imprimirCarta("../img/3_tres-copas.jpg");
                break;
            case 4:                    
                imprimirCarta("../img/4_cuatro-copas.jpg");
                break;
            case 5:
               imprimirCarta("../img/5_cinco-copas.jpg");
                break;               
            case 6:
                imprimirCarta("../img/6_seis-copas.jpg");
                break;
            case 7:
                imprimirCarta("../img/7_siete-copas.jpg");
                break;               
            case 10:
                imprimirCarta("../img/10_sota-copas.jpg");
                break;
            case 11:                    
               imprimirCarta("../img/11_caballo-copas.jpg");
                break;
            case 12:                    
                imprimirCarta("../img/12_rey-copas.jpg");
                break;
            default:
                imprimirCarta("../img/BocaAbajo.jpg");
    }
}

const mostrarPuntuación = () => {
    insertarAlResultadoTexto(`Tu puntuación actual es: ${puntuacionUsuario}`);
}

const mostrarMensajeGameOver = (estado : Estado) => {
    if (estado==="GAME_OVER") {
        insertarAlResultadoTexto(`GAME OVER: tu puntuación es ${puntuacionUsuario}`);
    }
}

const mostrarMensajePlantarse = (estado: Estado) => {
    switch(estado){
        case "CONSERVADOR":
            insertarAlResultadoTexto("Has sido muy conservador.");
            break;
        case "CAGUETA":
            insertarAlResultadoTexto("Te ha entrado caguelo eh?");
            break;
        case "CASI":
            insertarAlResultadoTexto("Casi casi...");
            break;
        case "WINNER":
            insertarAlResultadoTexto("¡Lo has clavado! ¡ENHORABUENA!");
            break;
        default:
            insertarAlResultadoTexto("No se cómo hemos acabado aquí!");
            break;
     }
}

const mostrarMensajePosibleResultado = () => {
    insertarAlResultadoTexto(`Tu puntuación hubiese sido: ${puntuacionUsuario}`);
}

const disabledButtonDameCarta = () :void =>{
    const dameCarta = <HTMLButtonElement>document.getElementById("dameCarta");

    dameCarta instanceof HTMLButtonElement
        ? dameCarta.disabled = true
        : console.error("disabledButtonDameCarta = elemento con id dameCarta no se ha encontrado");

}

const disabledButtonPlantarse = () :void =>{
    const plantarse = <HTMLButtonElement>document.getElementById("plantarse");

    plantarse instanceof HTMLButtonElement
        ?  plantarse.disabled = true
        : console.error("disabledButtonPlantasrse = elemento con id plantarse no se ha encontrado")
}

const borrarBotónNuevaPartida = () => {
    const boton = document.querySelector('#botonNuevaPartida');

    boton
        ? boton.remove()
        : console.error("borrarBotón: ele elemento con id botonNuevaPartida no se ha encontrado")
}

const disabledButtonNuevaPartida = () => {
    const boton = document.getElementById("nuevaPartida");

    boton instanceof HTMLButtonElement
        ? boton.disabled = true
        : console.error("disabledButtonNuevaPartida: el elemento con id nuevaPartida no se ha encontrado")
}

const disabledButtonQueHubiesePasado = () => {
    const boton = document.getElementById("queHubiesePasado");

    boton instanceof HTMLButtonElement
        ? boton.disabled = true
        : console.error("disabledButtonQueHubiesePasado: el elemento con id queHubiesePasado no se ha encontrado")
};

const cambiarEstado = () : Estado => {
    if (puntuacionUsuario < 4) {
        return "CONSERVADOR";
    }
    if (puntuacionUsuario >= 4 && puntuacionUsuario < 6 ){
        return "CAGUETA";
    }
    if (puntuacionUsuario >= 6 && puntuacionUsuario <= 7 ){
        return "CASI";
    }
    if (puntuacionUsuario = 7.5 ){
        return "WINNER";
    }
    else 
        return "GAME_OVER";
}

const comprobarEstadoBotónDameCarta = () : boolean => {
    const botón = <HTMLButtonElement>document.getElementById("dameCarta");

    return botón.disabled
}

const dameCartaAleatoria = () : number => {
    const numeroAleatorio = Math.floor(Math.random()*11);
    if(numeroAleatorio >= 8) {
        return numeroAleatorio+2;
    }
    return numeroAleatorio;
 }
 
const sumarPuntuación = (carta:number) :void => {
    carta <= 7 
        ? puntuacionUsuario += carta
        : puntuacionUsuario += 0.5;
}

 const activarEstadoGameOver = () : Estado  => {
     if(puntuacionUsuario > 7.5){
         disabledButtonDameCarta();
         disabledButtonPlantarse();
         return "GAME_OVER";
     }
     return "KEEP_PLAYING";
 }

 const activarBotónNuevaPartida = (disabled: boolean) => {
    if(disabled == true){
        const botón = document.getElementById('nuevaPartida');

        botón instanceof HTMLButtonElement
            ? botón.disabled = false
            : console.error("activarBotónNuevaPartida: el elemento con el id nuevaPartida es null")
    
    }
}

const activarBotones = () => {
    const plantarse = <HTMLButtonElement>document.getElementById("plantarse");
    const dameCarta = <HTMLButtonElement>document.getElementById("dameCarta");
    if (plantarse instanceof HTMLButtonElement && dameCarta instanceof HTMLButtonElement) { 
        plantarse.disabled = false;
        dameCarta.disabled =false;
    }
    else {
        console.error("activarBotones = elemento con id plantarse y dameCarta no se ha encontrado");
    }
}

const activarBotónSaberMás = () => {
    const botón = document.getElementById('queHubiesePasado');

    botón instanceof HTMLButtonElement
        ? botón.disabled = false
        : console.error("activarBotónNuevaPartida: el elemento con el id nuevaPartida es null")
}

const comprobarPuntuación = () => {
    if (puntuacionUsuario > 7.5) {
        mostrarMensajeGameOver(activarEstadoGameOver());
        activarBotónNuevaPartida(comprobarEstadoBotónDameCarta());
    }
 }

const jugarCarta = () => {
    const cartaAleatoria = dameCartaAleatoria();
    mostrarCarta(cartaAleatoria); 
    sumarPuntuación(cartaAleatoria);
    mostrarPuntuación();
    comprobarPuntuación();
};

const plantase = () => {
    const estadoActual = cambiarEstado();

    mostrarMensajePlantarse(estadoActual);
    disabledButtonDameCarta();
    activarBotónNuevaPartida(comprobarEstadoBotónDameCarta());
    activarBotónSaberMás();
}

const nuevaPartida = () => {
    activarBotones();
    puntuacionUsuario = 0;
    mostrarPuntuación();
    disabledButtonNuevaPartida();
    disabledButtonQueHubiesePasado();
    mostrarCarta(0);
}

const saberMas = () => {
    disabledButtonPlantarse();
    const cartaAleatoria = dameCartaAleatoria();
    mostrarCarta(cartaAleatoria);
    sumarPuntuación(cartaAleatoria);
    mostrarPuntuación();
    mostrarMensajePosibleResultado();
    disabledButtonQueHubiesePasado();
}

document.addEventListener("DOMContentLoaded", mostrarPuntuación);

const botonDarCarta = document.getElementById("dameCarta");
botonDarCarta instanceof HTMLButtonElement
    ? botonDarCarta.addEventListener("click", jugarCarta)
    : console.error("botonComprobar: elemento dameCarta no existe");

const botonPlantarse = document.getElementById("plantarse");
botonPlantarse instanceof HTMLButtonElement
    ? botonPlantarse.addEventListener("click", plantase)
    : console.error("botonPlantarse: elemento plantarse no existe");

const botonNuevaPartida = document.getElementById("nuevaPartida");
botonNuevaPartida instanceof HTMLButtonElement
    ? botonNuevaPartida.addEventListener("click", nuevaPartida)
    : console.error("botonPlantarse: elemento plantarse no existe");

const botonSaberMas = document.getElementById("queHubiesePasado");
botonSaberMas instanceof HTMLButtonElement
    ? botonSaberMas.addEventListener("click", saberMas)
    : console.error("botonPlantarse: elemento plantarse no existe");
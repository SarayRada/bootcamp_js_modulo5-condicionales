type Estado = 
"GAME_OVER" | 
"KEEP_PLAYING" | 
"CONSERVADOR" | 
"CAGUETA" |
"CASI"|
"WINNER"

let puntuacionUsuario = 0;

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

const imprimirCarta = (url: string) => {
    const ElementoCarta = document.getElementById("imagen-carta");
    if(ElementoCarta && ElementoCarta instanceof HTMLImageElement) {
        ElementoCarta.src = url;
    } else {
        console.error("imprimirCarta: el elemento imagen-carta no se ha encontrado")
    }
}

const mostrarPuntuación = () => {
    const resultado = document.getElementById("resultado");
    if (resultado) {
        resultado.innerHTML = `Tu puntuación actual es: ${puntuacionUsuario}`;
    } else {
        console.error("mostrarPuntuación: el elemento con id resultado no tiene valor");
    }
}

const mostrarMensajeGameOver = (estado : Estado) => {
    const resultado = document.getElementById("resultado");
    if (resultado && estado==="GAME_OVER") {
        resultado.innerHTML = `GAME OVER: tu puntuación es ${puntuacionUsuario}.`;
    } else {
        console.error("mostrarPuntuación: el elemento con id resultado no tiene valor");
    }
}

const mostrarMensajePlantarse = (estado: Estado) => {
    const resultado = document.getElementById("resultado");
    if (resultado) {
        switch(estado){
            case "CONSERVADOR":
                resultado.innerHTML = "Has sido muy conservador.";
                break;
            case "CAGUETA":
                resultado.innerHTML = "Te ha entrado caguelo eh?";
                break;
            case "CASI":
                resultado.innerHTML = "Casi casi...";
                break;
            case "WINNER":
                resultado.innerHTML = "¡Lo has clavado! ¡ENHORABUENA!";
                break;
            default:
                resultado.innerHTML = "No se cómo hemos acabado aquí!";
                break;
        }
    } else {
        console.error("mostrarPuntuación: el elemento con id resultado no tiene valor");
    }
}

const mostrarMensajePosibleResultado = () => {
    const elementoResultado = document.getElementById("resultado");
    if (elementoResultado) {
        elementoResultado.innerHTML = `Tu puntuación hubiese sido: ${puntuacionUsuario}`;
    } else {
        console.error("mostrarMensajePosibleResultado: el elemento con id resultado no tiene valor");
    }
}



const disabledButtonDameCarta = () :void =>{
    const dameCarta = <HTMLButtonElement>document.getElementById("dameCarta");

    dameCarta
        ? dameCarta.disabled = true
        : console.error("disabledButtonDameCarta = elemento con id dameCarta no se ha encontrado");

}

const disabledButtonPlantarse = () :void =>{
    const plantarse = <HTMLButtonElement>document.getElementById("plantarse");

    plantarse
        ?  plantarse.disabled = true
        : console.error("disabledButtonPlantasrse = elemento con id plantarse no se ha encontrado")
}

const borrarBotónNuevaPartida = () => {
    const boton = document.querySelector('#botonNuevaPartida');

    boton
        ? boton.remove()
        : console.error("borrarBotón: ele elemento con id botonNuevaPartida no se ha encontrado")
}

const borrarBotónSaberMás = () => {
    const boton = document.querySelector('#botonSaberMás');

    boton
        ? boton.remove()
        : console.error("borrarBotónSaberMás: el elemento con id botonSaberMás no se ha encontrado")
};



const cambiarEstado = () : Estado => {
    if (puntuacionUsuario <= 4) {
        return "CONSERVADOR";
    }
    switch(puntuacionUsuario){
        case 5:
            return "CAGUETA";
        case 6:
            return "CASI";
        case 7:
            return "CASI";
        case 7.5:
            return "WINNER";
        default:
            activarEstadoGameOver;
            return "GAME_OVER";
    }
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
     if(carta <= 7) {
         puntuacionUsuario += carta;
     } else {
         puntuacionUsuario += 0.5;
     }
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
    const container = document.getElementById('botones');

    if(container){
        const CrearNuevoBotón = () => {
            const botonNuevaPartida = document.createElement('button');
            botonNuevaPartida.textContent = 'Nueva Partida';
            botonNuevaPartida.id = "botonNuevaPartida"

            botonNuevaPartida.addEventListener("click", nuevaPartida);

            container.appendChild(botonNuevaPartida);
            disabledButtonPlantarse();
        };
        if (disabled === true) CrearNuevoBotón();
    } else {
        console.error("activarNuevaPartida: el elemento botones no se ha encontrado");
    };
}

const activarBotones = () => {
    const plantarse = <HTMLButtonElement>document.getElementById("plantarse");
    const dameCarta = <HTMLButtonElement>document.getElementById("dameCarta");
    if (plantarse && dameCarta) { 
        plantarse.disabled = false;
        dameCarta.disabled =false;
    }
    else {
        console.error("activarBotones = elemento con id plantarse y dameCarta no se ha encontrado");
    }
}

const activarBotónSaberMás = () => {
    const container = document.getElementById('botones');

    if(container){
        const CrearNuevoBotón = () => {
            const botonSaberMas = document.createElement('button');
            botonSaberMas.textContent = '¿Qué habría pasado?';
            botonSaberMas.id = "botonSaberMás"

            botonSaberMas.addEventListener("click", saberMas);

            container.appendChild(botonSaberMas);
            disabledButtonPlantarse();
        };
        CrearNuevoBotón();
    } else {
        console.error("activarNuevaPartida: el elemento botones no se ha encontrado");
    };
}

 

const jugarCarta = () => {
    const cartaAleatoria = dameCartaAleatoria();
    mostrarCarta(cartaAleatoria); 
    sumarPuntuación(cartaAleatoria);
    mostrarPuntuación();
    mostrarMensajeGameOver(activarEstadoGameOver());
    activarBotónNuevaPartida(comprobarEstadoBotónDameCarta());
}

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
    borrarBotónNuevaPartida();
    mostrarCarta(0);
}

const saberMas = () => {
    const cartaAleatoria = dameCartaAleatoria();
    sumarPuntuación(cartaAleatoria);
    mostrarPuntuación();
    mostrarMensajePosibleResultado();
    mostrarCarta(0);
    borrarBotónSaberMás();
}

document.addEventListener("DOMContentLoaded", mostrarPuntuación);


const botonDarCarta = document.getElementById("dameCarta");
if(botonDarCarta) botonDarCarta.addEventListener("click", jugarCarta);
else console.error("botonComprobar: elemento dameCarta no existe");

const botonPlantarse = document.getElementById("plantarse");
if(botonPlantarse) botonPlantarse.addEventListener("click", plantase);
else console.error("botonPlantarse: elemento plantarse no existe");

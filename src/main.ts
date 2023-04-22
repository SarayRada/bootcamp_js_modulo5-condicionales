type estado = 
"GAME_OVER" | 
"KEEP_PLAYING" | 
"CONSERVADOR" | 
"CAGUETA" |
"CASI"|
"WINNER"

let puntuacionUsuario = 0;

const mostrarCarta = (carta: number) : void => {
    const ElementoCarta = <HTMLImageElement> document.getElementById("imagen-carta");
    if(ElementoCarta) {
        switch(carta){               
            case 1:
                ElementoCarta.src = "../img/1_as-copas.jpg";
                break;
            case 2:
                ElementoCarta.src = "../img/2_dos-copas.jpg";
                break;               
            case 3:
                ElementoCarta.src = "../img/3_tres-copas.jpg";
                break;
            case 4:                    
                ElementoCarta.src = "../img/4_cuatro-copas.jpg";
                break;
            case 5:
                ElementoCarta.src = "../img/5_cinco-copas.jpg";
                break;               
            case 6:
                ElementoCarta.src = "../img/6_seis-copas.jpg";
                break;
            case 7:
                ElementoCarta.src = "../img/7_siete-copas.jpg";
                break;               
            case 10:
                ElementoCarta.src = "../img/10_sota-copas.jpg";
                break;
            case 11:                    
                ElementoCarta.src = "../img/11_caballo-copas.jpg";
                break;
            case 12:                    
                ElementoCarta.src = "../img/12_rey-copas.jpg";
                break;
            }
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

const mostrarMensajeGameOver = (estado : estado) => {
    const resultado = document.getElementById("resultado");
    if (resultado && estado==="GAME_OVER") {
        resultado.innerHTML = `GAME OVER: tu puntuación es ${puntuacionUsuario}.`;
    } else {
        console.error("mostrarPuntuación: el elemento con id resultado no tiene valor");
    }
}

const mostrarMensajePlantarse = (estado: estado) => {
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


const disabledButtonDameCarta = () :void =>{
    const dameCarta = <HTMLButtonElement>document.getElementById("dameCarta");
        if (dameCarta) { 
            dameCarta.disabled = true;
        }
        else {
            console.error("disabledButtonDameCarta = elemento con id dameCarta no se ha encontrado");
        }
}

const disabledButtonPlantarse = () :void =>{
    const plantarse = <HTMLButtonElement>document.getElementById("plantarse");
        if (plantarse) { 
            plantarse.disabled = true;
        }
        else {
            console.error("disabledButtonPlantasrse = elemento con id plantarse no se ha encontrado");
        }
}

const cambiarEstado = () : estado => {
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
            activarGameOver;
            return "GAME_OVER";
    }
}

const dameCartaAleatoria = () : number => {
    const numeroAleatorio = Math.floor(Math.random()*11);
    if(numeroAleatorio >= 8) return numeroAleatorio+2;
    else return numeroAleatorio;
 }
 
 const sumarPuntuación = (carta:number) :void => {
     if(carta <= 7) {
         puntuacionUsuario += carta;
     } else {
         puntuacionUsuario += 0.5;
     }
 }
 
 const activarGameOver = () : estado  => {
     if(puntuacionUsuario > 7.5){
         disabledButtonDameCarta();
         disabledButtonPlantarse();
         return "GAME_OVER";
     }
     return "KEEP_PLAYING";
 }
 
const jugarCarta = () => {
    const cartaAleatoria = dameCartaAleatoria();
    mostrarCarta(cartaAleatoria); 
    sumarPuntuación(cartaAleatoria);
    mostrarPuntuación();
    mostrarMensajeGameOver(activarGameOver());
}

const plantase = () => {
    const estadoActual = cambiarEstado();

    mostrarMensajePlantarse(estadoActual);
    disabledButtonDameCarta();
}

document.addEventListener("DOMContentLoaded", mostrarPuntuación);


const botonDarCarta = document.getElementById("dameCarta");
if(botonDarCarta) botonDarCarta.addEventListener("click", jugarCarta);
else console.error("botonComprobar: elemento dameCarta no existe");

const botonPlantarse = document.getElementById("plantarse");
if(botonPlantarse) botonPlantarse.addEventListener("click", plantase);
else console.error("botonPlantarse: elemento plantarse no existe");


/*const activarNuevaPartida = (estado: boolean) => {
    const container = document.getElementById('nuevaPartida');

    if(container){
        const CrearNuevoBotón = () => {
            const botonNuevaPartida = document.createElement('button');
            botonNuevaPartida.textContent = 'Nueva Partida';
            botonNuevaPartida.id = "botonNuevaPartida";

            container.appendChild(botonNuevaPartida);
            disabledButtonPlantasrse();
        };
        if (estado === true) CrearNuevoBotón();
    } else {
        console.error("activarNuevaPartida: el elemento nuevaPartida no se ha encontrado");
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

const nuevaPartida = () => {
    puntuacionUsuario = 0;
    mostrarPuntuación;
    activarBotones;
}

const disabledButtonPlantasrse = () :void =>{
    const plantarse = <HTMLButtonElement>document.getElementById("plantarse");
        if (plantarse) { 
            plantarse.disabled = true;
        }
        else {
            console.error("disabledButtonPlantasrse = elemento con id plantarse no se ha encontrado");
        }
}

const comprobarEstadoBotón = () : boolean => {
    const botón = <HTMLButtonElement>document.getElementById("dameCarta");
        if (botón.disabled == true) { 
            return true;
        }
        else {
            console.error("buttonDisabled = elemento con id dameCarta no se ha encontrado");
            return false;
        }
}

const botonNuevaPartida = document.getElementById("botonNuevaPartida");
if(botonNuevaPartida) botonNuevaPartida.addEventListener("click", nuevaPartida);
else console.error("botonNuevaPartida: elemento botonNuevaPartida no existe");
*/
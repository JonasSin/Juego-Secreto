//let titulo = document.querySelector('h1'); 
//titulo.innerHTML = "jUEGO del Número secreto"; 

//let parrafo = document.querySelector('p'); 
//parrafo.innerHTML = "Selecciona un numero del 1 al 10"; 

let numeroAleatorio2 = 0; 
let intentos = 1; 
//console.log(numeroAleatorio2); 

//Numero maximo de intentos variables
let numeroMaximo = 10; 

//Lista para determinar los numeros sorteados. 
let listaArrayNumeros = []; 

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector( elemento );
    elementoHTML.innerHTML = texto;
}   

function numeroAleatorio(){
    let numeroAleatorio3 = Math.floor(Math.random()*numeroMaximo) + 1;
    //Si el numero generado esta en la lista: 

    if(listaArrayNumeros.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros'); 
    }else{
        if(listaArrayNumeros.includes(numeroAleatorio3)){
            return numeroAleatorio(); 
        }else{
            listaArrayNumeros.push(numeroAleatorio3); 
            return numeroAleatorio3; 
        }
    }
}

function llamadaDeVerificarIndex(){

    let numeroIngresado = parseInt(document.getElementById('valorIngresado').value  ); 
    //console.log(typeof(numeroIngresado)); 
    console.log(numeroIngresado); 
    
    //console.log(typeof(numeroAleatorio2)); 
    //console.log(numeroIngresado === numeroAleatorio2); 

    if(numeroIngresado === numeroAleatorio2){
        asignarTextoElemento('p', `Felicidades! Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); 
        document.getElementById('reiniciar').removeAttribute("disabled"); 
    }else{
        if(numeroIngresado > numeroAleatorio2){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++; 
        limpiarcaja(); 
    }
}

function limpiarcaja(){
    /*let limpiar = document.querySelector('#valorIngresado') ;
    limpiar.value= "";*/
    //REDUCIR EL CODIGO DE ARRIBA. 
    document.querySelector('#valorIngresado').value='';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'jUego del Número secreto');
    asignarTextoElemento('p', `Selecciona un número del 1 al ${numeroMaximo}`);  
    intentos=1; 
    //Guarga el numero generado aleatoriamente. 
    numeroAleatorio2 = numeroAleatorio(); 
    console.log(numeroAleatorio2); 
    console.log(listaArrayNumeros); 

    //Desabilitar el botón de nuevo juego por el momento
 
}

function reiniciarJuego(){
    //Llamada de la funcion limpiar caja.
    limpiarcaja(); 
    //Llamada de la funcion de las condiciones. 
    condicionesIniciales(); 

    document.getElementById('reiniciar').setAttribute("disabled", "true"); 
}

condicionesIniciales(); 



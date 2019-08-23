/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var puntaje,  puntajeRonda, jugadorActivo, jugando;

iniciar();


dado = Math.floor(Math.random() * 6 ) +1;
/*math random : da un valor aleatorio entre 0 y 1 multiplicarlo por 6 da numero entre 0 y 5 
(defimales) para que llegue 6 se le suma 1
floor le saca los decimales*/


//document.querySelector('#puntaje-actual-' + jugadorActivo).textContent =  dado;
//document.querySelector('#puntaje-actual-' + jugadorActivo).innerHTML = '<em>' + dado + '<em>';



var x = document.querySelector('#puntaje-0').textContent; //lerr
console.log(x);



//funcion de callback funcion que es pasada a otro funcion como argumento
//anonima funcion que no tiene nombre
document.querySelector('.btn-tirar').addEventListener('click',function(){
    if(jugando){
          //generar numero aleatorio
    var dado = Math.floor(Math.random() * 6 ) +1;

    //mostrar resultado
    var dadoDOM =  document.querySelector('.dado');
    dadoDOM.style.display = 'block';
    dadoDOM.src = 'dado-' + dado + '.png';
     //actualizar el puntahe de la tirarda si numero no fue un 1

    if (dado !== 1){

        puntajeRonda += dado;
        document.querySelector('#puntaje-actual-' + jugadorActivo).textContent  = puntajeRonda ;       

    } else {
        CambioDeJugador();
        
        
    }

    }

  

});

document.querySelector('.btn-esperar').addEventListener('click', function(){
    if(jugando){


    //agragar puntaje actual al pontaje total
    puntaje[jugadorActivo] += puntajeRonda;
    //actualizar ui

    document.querySelector('#puntaje-' + jugadorActivo).textContent = puntaje[jugadorActivo];

    //CambioDeJugador();

 

    //chequear si el jugador gano el juego
    if (puntaje[jugadorActivo] >= 10) {

        document.querySelector('#nombre-' + jugadorActivo).textContent = 'Ganador!';
        document.querySelector('.dado').style.display= 'none';
        document.querySelector('.jugador-' + jugadorActivo + '-panel').classList.add('ganador');
        document.querySelector('.jugador-' + jugadorActivo + '-panel').classList.remove('activa');
        jugando = false;
    } else {
        CambioDeJugador();


    }

    document.querySelector('.btn-nuevo').addEventListener('click',iniciar);





    }


});


function CambioDeJugador(){

    jugadorActivo === 0 ? jugadorActivo = 1 : jugadorActivo = 0; //operador ternario  si  jugador activo es 0 juagador activo debe ser 1 sino debe ser 0
        puntajeRonda = 0;

        document.getElementById('puntaje-actual-0').textContent = '0';
        document.getElementById('puntaje-actual-1').textContent = '0';

        document.querySelector('.jugador-0-panel').classList.toggle('activa');
        document.querySelector('.jugador-1-panel').classList.toggle('activa');

        document.querySelector('.dado').style.display = 'none';


}




function iniciar() {
    jugando = true;
    puntaje = [0,0];
    jugadorActivo=0;
    puntajeRonda = 0;
    document.querySelector('.dado').style.display = 'none';
    document.getElementById('puntaje-0').textContent = '0';
    document.getElementById('puntaje-1').textContent = '0';
    document.getElementById('puntaje-actual-0').textContent = '0';
    document.getElementById('puntaje-actual-1').textContent = '0';
    document.getElementById('nombre-0').textContent = 'Jugador1';
    document.getElementById('nombre-1').textContent = 'Jugador2';
    document.querySelector('.jugador-0-panel').classList.remove('ganador');
    document.querySelector('.jugador-1-panel').classList.remove('ganador');
    document.querySelector('.jugador-0-panel').classList.remove('activa');
    document.querySelector('.jugador-1-panel').classList.remove('activa');
    document.querySelector('.jugador-0-panel').classList.add('activa');





}

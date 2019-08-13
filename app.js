/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var puntaje,  puntajeRonda, jugadorActivo

puntaje= [0,0];
pundaRonda = 0;
jugadorActivo = 0;

dado = Math.floor(Math.random() * 6 ) +1;
/*math random : da un valor aleatorio entre 0 y 1 multiplicarlo por 6 da numero entre 0 y 5 
(defimales) para que llegue 6 se le suma 1
floor le saca los decimales*/
console.log(dado)

//document.querySelector('#puntaje-actual-' + jugadorActivo).textContent =  dado;
document.querySelector('#puntaje-actual-' + jugadorActivo).innerHTML = '<em>' + dado + '<em>';



var x = document.querySelector('#puntaje-0').textContent; //lerr
console.log(x);
document.querySelector('.dado').style.display = 'none';


document.getElementById('puntaje-0').textContent = '0';
document.getElementById('puntaje-1').textContent = '0';
document.getElementById('puntaje-actual-0').textContent = '0';
document.getElementById('puntaje-actual-1').textContent = '0';


//funcion de colback funcion que es pasada a otro funcion como argumento
//anonima funcion que no tiene nombre
document.querySelector('.btn-tirar').addEventListener('click',function(){

    //generar numero aleatorio
    dado = Math.floor(Math.random() * 6 ) +1;

    //mostrar resultado
    var dadoDOM =  document.querySelector('.dado');
    dadoDOM.style.display = 'block';
    dadoDOM.src = 'dado-' + dado + '.png';



    //actualizar el puntahe de la tirarda si numero no fue un 1




});




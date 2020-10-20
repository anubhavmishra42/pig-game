/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*var score,activePlayer,dice,current=0;
score=[0,0];
activePlayer=0;
console.log(dice);
document.querySelector('#current-0').textContent=0;
document.querySelector('#current-1').textContent=0;
document.querySelector('#score-0').textContent=0;
document.querySelector('#score-1').textContent=0;
document.querySelector('.dice').style.display='none';
document.querySelector('.btn-roll').addEventListener('click',function(){
  dice=Math.floor(Math.random()*6)+1;
    if(dice>1){
        current+=dice;
        document.querySelector('#current-'+activePlayer).textContent=current;
    }
    else{   
        activeP();
    }

var diceImg=document.querySelector('.dice');
    diceImg.style.display='block';
    diceImg.src='dice-'+dice+'.png';
}
);
    
    
document.querySelector('.btn-hold').addEventListener('click',function(){
    score[activePlayer]+=current;
    document.querySelector('#score-'+activePlayer).textContent=score[activePlayer];
    activeP();
    
});

function activeP(){
        activePlayer=(activePlayer===0)?1:0;
        current=0;
        document.querySelector('#current-0').textContent=0;
        document.querySelector('#current-1').textContent=0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
    }*/
    


var score=[],activePlayer,current,dice,playerName=[],gameOn;
function init(){
    gameOn=true;
    score[0]=0;
 score[1]=0;    
 document.querySelector('#score-0').textContent=score[0];
 document.querySelector('#score-1').textContent=score[1];
 activePlayer=0;
 current=0;    
 document.querySelector('#current-0').textContent='0';
 document.querySelector('#current-1').textContent='0';
 playerName[0]=prompt('Enter name for player 1');
 playerName[1]=prompt('Enter name for player 2');
 document.querySelector('#name-0').textContent=playerName[0];
 document.querySelector('#name-1').textContent=playerName[1];
document.querySelector('.dice').style.display='none';  
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');

}

init();





document.querySelector('.btn-roll').addEventListener('click', function(){ 
if(gameOn){    
    
dice=Math.floor(Math.random()*6)+1;
    
document.querySelector('.dice').style.display='block'; 
    
document.querySelector('.dice').src='dice-'+dice+'.png';
    
    
if(dice>1){
    
current+=dice;   
    
document.querySelector('#current-'+activePlayer).textContent=current;
   
}
else{
   nextPlayer();
}
    
}
    else{
     alert('Game is over, click on new game to start fresh ');
    }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
if(gameOn){
    score[activePlayer]+=current;
    
    if(score[activePlayer]>=20){
        gameOn=false;
        document.querySelector('#name-'+activePlayer).textContent=playerName[activePlayer]+' Winner!!!';
        document.querySelector('#score-0').textContent=score[0];
        document.querySelector('#score-1').textContent=score[1];
        document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none';
    }
    else{
    nextPlayer(); 
}
}
else{
    alert('Game is over, click on new game to start fresh ');
}});

function nextPlayer(){
 document.querySelector('#score-0').textContent=score[0];
 document.querySelector('#score-1').textContent=score[1];
 activePlayer=activePlayer===0?1:0;
 current=0;    
 document.querySelector('#current-0').textContent='0';
 document.querySelector('#current-1').textContent='0';    

 document.querySelector('.player-0-panel').classList.toggle('active');
 document.querySelector('.player-1-panel').classList.toggle('active'); 
 document.querySelector('.dice').style.display='none';
    }


document.querySelector('.btn-new').addEventListener('click', function(){
 
    init();
});
































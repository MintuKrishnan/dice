
var a,m=0;
var scores=[0,0];
var s=0;
var gamePlaying=true;
var z,win=50;

document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(gamePlaying){
        
        
    a=Math.floor(Math.random()*6)+1;
    document.querySelector('.dice'+s).src='dice-'+a+'.png';
    
    if(a!==1)
        {
            m+=a;
        }
    else{
        
        scores[s]+=0;
       player();
        
    }
    
    document.querySelector('#current-'+s).textContent=m;
    }
    
});

document.querySelector('.btn-hold').addEventListener('click',function(){
     z=document.querySelector('.btn-val').value;
    if(z){
        win=z;
    }else{
        win=50;
    }
    
    if(gamePlaying){
       scores[s]+=m; 
    if(scores[s]>=win){
        document.querySelector('#name-'+s).innerHTML='<b>winner</b>';
          document.querySelector('.player-'+s+'-panel').classList.add('winner');   
            document.querySelector('#score-'+s).textContent=scores[s];
        gamePlaying=false;
        }
    else{
       
        player();
       document.querySelector('#current-'+s).textContent=m;
    }  
    }
   
});

function player(){
     document.querySelector('.player-'+s+'-panel').classList.remove('active');
          document.querySelector('#score-'+s).textContent=scores[s];
        s===0?s=1:s=0;
        document.querySelector('.player-'+s+'-panel').classList.add('active');
        m=0;
}


document.querySelector('.btn-new').addEventListener('click',function(){
  d1=0,d2=0,m=0;
scores=[0,0];
s=0;  
    gamePlaying=true;
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;
    document.querySelector('#score-0').textContent=0;
    document.querySelector('#score-1').textContent=0;
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
     document.querySelector('.player-0-panel').classList.remove('winner'); 
     document.querySelector('.player-1-panel').classList.remove('winner'); 
     document.querySelector('#name-0').textContent='Player 1';
     document.querySelector('#name-1').textContent='Player 2';
   
});
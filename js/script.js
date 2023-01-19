window.onload = function(){
    const mario = document.querySelector('.game-board .mario');
    const pipe = document.querySelector('.game-board .pipe');
    
    const jump=()=>{
      mario.classList.add('jump');
      setTimeout(()=>{
        mario.classList.remove('jump');
      },500)
    }
  
    const loop =setInterval(()=>{
        // posição do cano
      const pipePosition = pipe.offsetLeft;
      //quando omario bater no cano ele não descer pro chão e volta a anda
      const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',''); 
      if(pipePosition <=120 && pipePosition >0 && marioPosition < 80){
  
        pipe.style.animation= 'none';
        pipe.style.left = `${pipePosition}px`;
      
        mario.style.animation= 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = '../images/game-over.png'
        mario.style.width= '250px';
        mario.style.marginLeft='50px';
      }
    },10)
    
    
    document.addEventListener('keydown', jump); //faaze com que o botao faca o mario pula
    }
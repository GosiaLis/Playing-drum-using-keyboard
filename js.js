function mySound (e){
    const audio= document.querySelector(`audio[data-key="${e.key}"]`);
    const key= document.querySelector(`.key[data-key="${e.key}"]`);
    if(!audio){
        return} //stop the function from running all together 
    audio.currentTime=0; // rewind to the start
    audio.play();
    key.classList.add('playing');
   
}



function removeTransition (e) {
    if (e.propertyName !== 'transform')
        return;   //skip it if it's not transform
        this.classList.remove('playing');
        
}

const keys= document.querySelectorAll('.key') // array
keys.forEach(key => key.addEventListener('transitionend', removeTransition)) // when you have an array of element you can\t listen on all of them so we can't do keys.addEventListener, when transition is done remove the effect
window.addEventListener('keydown', mySound)

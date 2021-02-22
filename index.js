function playSound (e) {
    // get the keyCode from the event object when it fires on keydown
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) ;
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) ;
    // if the key returns falsy stop the function
    if (!audio) return ;
    // rewind the audio to the beginning
    audio.currentTime = 0;
    //add the playing class to the key that was pressed
    key.classList.add('playing');
    audio.play() ;
}


// removes the .playing class
function removeTransition(e){
    // if the event propertyName is not transform, skip it
    if(e.propertyName !== 'transform') return; 
    this.classList.remove('playing')
}

// get all keys
const keys = Array.from(document.querySelectorAll('.key'));
// when a transitionend event fires on an element with the .key class run the removeTransition function
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// playSound when a key is pressed
window.addEventListener('keydown', playSound)

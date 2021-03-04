function setUpEventListener() {
    window.addEventListener('keydown', playSound);
    document.querySelectorAll('.key').forEach(key => key.addEventListener('transitionend', removeTransition));
}

function playSound(e) {
    const DOM = DOMStrings(e);
    const $audioEl = document.querySelector(DOM.audioDataKey);
    const $key = document.querySelector(DOM.keyDataKey);
    if(!$audioEl) return;
    $audioEl.play();
    $audioEl.currentTime = 0;
    $key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

function DOMStrings(e) {
    return {
        audioDataKey: `audio[data-key = '${e.keyCode}']`,
        keyDataKey: `.key[data-key = '${e.keyCode}']`,
    }
}

setUpEventListener();






window.onload = function() {
    
    var container = document.querySelector('.container');

    var lettersArray = ['A', 'S', 'D', 'F','G', 'H', 'J', 'K', 'L'];
    var codeArray = [65, 83,68, 70, 71, 72, 74, 75, 76];
    var soundsText = ['boom', 'clap', 'hihat', 'kick', 'openhat', 'ride', 'snare', 'tink', 'tom'];
    
    for (var i = 0; i < lettersArray.length; i++) {

        var divs = document.createElement('div');
        var letters =  document.createTextNode(lettersArray[i]);
        var br = document.createElement('br')
        var span = document.createElement('span');
        var spanText = document.createTextNode(soundsText[i]);
        span.classList.add('span');
        span.appendChild(spanText);
        divs.setAttribute('data-key', codeArray[i]);
        divs.classList.add('keys');
        divs.appendChild(letters);
        divs.appendChild(br);
        divs.appendChild(span);

        container.appendChild(divs);
    }

    var keys = document.querySelectorAll('.keys');

    keys.forEach(function(element, index) {
        element.addEventListener('transitionend', function(e) {
           this.classList.remove('playing');
        });
    });

    
    var audios = document.querySelectorAll('audio');

    window.addEventListener('keydown', function(e){
   
        keys.forEach(function(element, index){

            var eleDataAttr = element.getAttribute('data-key');
    
            if (e.keyCode == eleDataAttr) {
                element.classList.add('playing');
            }

        });

        audios.forEach(function(element){

            if(e.keyCode == element.getAttribute('data-key')) {
                element.play();
                element.currentTime = 0;
            }
        });

    });
}
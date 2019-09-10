window.onload = function () {
    counter = 0;
    speedcnt = 0;
    txtarea = document.getElementById('text-area');
    document.getElementById('fontsize').onchange = checkFontSize;
    document.getElementById('turbo').onchange = speed;
    document.getElementById('animation').onchange = animation;
    document.getElementById('start').onclick = start;
    document.getElementById('stop').onclick = stop;
}

function start() {
    console.log(txtarea.value);
    animation();
}

function change() {
    if(arr){
        txtarea.value = arr[counter];
        counter++;
        if(counter > arr.length - 1){
            counter = 0;
        }
    }
}

function stop() {
    clearInterval(timer);
    document.getElementById('text-area').value = '';
}

function animation() {
    var anim = document.getElementById('animation').value;
    if(anim === 'Dive') {
        arr = DIVE.split('=====');
    } else if(anim === 'Exercise') {
        arr = EXERCISE.split('=====');
    } else if(anim === 'Bike'){
        arr = BIKE.split('=====');
    } else if(anim === 'Juggler'){
        arr = JUGGLER.split('=====');
    } else {
        arr = null;
    }
    speed();
    document.getElementById('stop').removeAttribute('disabled');
}

function checkFontSize() {
    var fsize = this.value;
    if(fsize === 'Tiny') {
        txtarea.style.fontSize = '7pt';
    } else if(fsize === 'Small') {
        txtarea.style.fontSize = '10pt';
    } else if(fsize === 'Medium'){
        txtarea.style.fontSize = '12pt';
    } else if(fsize === 'Large'){
        txtarea.style.fontSize = '16pt';
    } else if(fsize === 'XXL'){
        txtarea.style.fontSize = '32pt';
    } else if(fsize === 'Extra Large'){
        txtarea.style.fontSize = '24pt';
    } else {

    }
}

function speed() {
    if(speedcnt==0){
        timer = setInterval(change, 250);
    } else{
        if(document.getElementById('turbo').checked){
            clearInterval(timer);
            timer = setInterval(change, 50);
        } else{
            clearInterval(timer);
            timer = setInterval(change, 250);
        }
    }
    speedcnt++;
}
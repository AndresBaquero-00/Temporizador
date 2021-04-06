let rounds;
let time_break;
let time_work;

let seconds;
let minutes;

let secondsW;
let secondsB;
let count_rounds;
let status;

let time;

const tic_audio = new Audio('./assets/audio/tic.mp3');
const finish_audio = new Audio('./assets/audio/finish.mp3');
const break_audio = new Audio('./assets/audio/break.mp3');

const img_break = document.getElementById('img-break');

const refresh = () => {
    const minutos = minutes < 10 ? '0' + minutes:minutes;
    document.querySelector('.minutos').innerHTML = minutos;
    
    const segundos = seconds < 10 ? '0' + seconds:seconds;
    document.querySelector('.segundos').innerHTML = segundos;
}

const handler = async () => {
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;
    }

    if( status === true ){
        img_break.className = 'oculto';
        secondsW++;
        if(secondsW === time_work){
            secondsW = 0;
            status = false;
            await break_audio.play();
        }
    }else{
        img_break.className = '';
        secondsB++;
        if((time_break - secondsB) <= 5){
            tic_audio.play();
        }if(secondsB === time_break){
            secondsB = 0;
            count_rounds++;
            status = true;
            await finish_audio.play();
        }
    }

    if( count_rounds === rounds ){
        stopTime();
        alert('Felicidades. Ha terminado todas las rondas.');
    }

    refresh();
}

const stopTime = () => {
    clearInterval(time);
}

const initTime = () => {
    rounds = Number.parseInt(document.querySelector('.rondas').value);
    time_break = Number.parseInt(document.querySelector('.time-break').value);
    time_work = Number.parseInt(document.querySelector('.time-work').value);

    seconds = 0;
    minutes = 0;
    secondsW = 0;
    secondsB = 0;
    count_rounds = 0;
    status = true;

    if( !rounds || !time_break || !time_work ){
        alert('Favor rellenar todos los campos.');
        return;
    }

    time = setInterval(handler, 1000);
}

const btnComenzar = document.querySelector('#btn-comenzar');
btnComenzar.addEventListener('click', initTime);

const btnPausar = document.querySelector('#btn-pausar');
btnPausar.addEventListener('click', stopTime);


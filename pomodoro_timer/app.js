let play = document.getElementById('play-button');
let min = 24;
let sec = 59;

let alarm = new Audio('School_Bell.mp3');

let Pomodoro = document.querySelector('#pomodoro');
let long = document.querySelector('#long');
let short = document.querySelector('#short');

Pomodoro.addEventListener('click', (event) => {
    let time = `25:00`;
    document.querySelector('h1').innerText = time;
    min = 24;
    sec = 59;

})
long.addEventListener('click', (event) => {
    let time = `15:00`;
    document.querySelector('h1').innerText = time;
    min = 14;
    sec = 59;
    
    
    
});
short.addEventListener('click', (event) => {
    let time = `05:00`;
    document.querySelector('h1').innerText = time;
    min = 4;
    sec = 59;

    
    
});



play.addEventListener('click', (event) => {
    
    
    if (play.innerHTML == '<i class="fa-solid fa-stop fa-5x"></i>' ){
        play.innerHTML = '<i class="fa-solid fa-play fa-5x"></i>';
        stopTimer();
        

    }
    else{
        play.innerHTML = '<i class="fa-solid fa-stop fa-5x"></i>';
        start();
        
    }



})
let min_int;
let sec_int;

function start(){
    
    
    var newmin = min<10 ? '0'+min : min;
    var newsec = sec<10 ? '0'+sec : sec;
    let time = `${newmin}:${newsec}`;
    document.querySelector('h1').innerText = time;
    
    min_int = setInterval(minTimer, 1000*sec);
    sec_int = setInterval(secTimer, 1000);
    

    function minTimer() {

        if (min >0){
            min = min-1;
        
        

           var newmin = min<10 ? '0'+min : min;
           var newsec = sec<10 ? '0'+sec : sec;
           let time = `${newmin}:${newsec}`;
           document.querySelector('h1').innerText = time;

        }
        
        

    }

    function secTimer() {
        
        
        if (sec<=0){
            if(min<=0){
                alarm.play();
                clearInterval(min_int);
                clearInterval(sec_int);
            }
            else{
                sec = 60;
            }
            
            
            
            
        }
        else{
            sec = sec-1;
        
            var newmin = min<10 ? '0'+min : min;
            var newsec = sec<10 ? '0'+sec : sec;
            let time = `${newmin}:${newsec}`;
            document.querySelector('h1').innerText = time;

        }

        
        
    }

}

function stopTimer() {
    clearInterval(min_int);
    clearInterval(sec_int);

}
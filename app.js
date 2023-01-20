const timeH = document.querySelector('h1');
let timeSecond = 10;

timeH.innerHTML = `00:${timeSecond}`;

const countDown = setInterval (()=>{
    timeSecond--;
    timeH.innerHTML = `00:${timeSecond}`;
    if(timeSecond <=0 || timeSecond < 1){
        clearInterval(countDown); 
    }
},1000)


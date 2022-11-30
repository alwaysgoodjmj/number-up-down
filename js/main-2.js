let comNum = 0;
let startArea = document.querySelector('.start')
let startBtn = document.querySelector('.start-btn');
let goBtn = document.querySelector('#go-btn');
let userInput = document.querySelector('#user-input');
let result = document.querySelector('.result');
let resultImg = document.querySelector('.result-img');
let resultTxt = document.querySelector('.result-txt');
let resetBtn = document.querySelector('#reset-btn');
let chanceArea = document.querySelector('#chance-area');
let chance = 5;
let over = false;
let numHistory = [];


console.log(resultTxt);

startBtn.addEventListener('click', function(){
    startArea.style.display = "none";
    result.style.display = "block";
})
goBtn.addEventListener('click', play)
resetBtn.addEventListener('click', reset)
userInput.addEventListener('click', function(){
    userInput.value = "";
})

function random(){
    comNum = Math.floor(Math.random()*100)+1
    console.log("정답:", comNum)
}

function play(){
    let userNum = userInput.value;

    if(userNum < 1 || userNum > 100){
        resultTxt.textContent = "1과 100사이의 숫자를 입력하시오."
        return;
    }

    if(numHistory.includes(userNum)){
        resultTxt.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력하시오."
        return;
    }

    chance --;
    chanceArea.textContent = `남은 기회 : ${chance}번 `

    if(userNum < comNum){
        resultImg.src = "https://i.kym-cdn.com/photos/images/original/001/535/156/c51.gif";
        resultTxt.textContent = "UP!"
    } else if(userNum > comNum){
        resultImg.src = "https://media2.giphy.com/media/3ohhwH6yMO7ED5xc7S/giphy.gif"
        resultTxt.textContent = "DOWN!"
    } else{
        resultImg.src = "http://photo.coolenjoy.co.kr/data/editor/2006/20200626173538_%EC%A0%95%EB%8B%B5_%EC%9B%80%EC%A7%A4.gif"
        resultTxt.textContent = "CORRECT!"
        over = true;
    }

    numHistory.push(userNum);

    if(chance < 1){
        over = true;
    }
    if(over == true){
        goBtn.disabled = true;
    }
}

function reset(){
    
    userInput.value = "";
    random();
    resultImg.src = "https://thumbs.gfycat.com/BitesizedLastingAmericanbittern-size_restricted.gif"
    over = false;
    goBtn.disabled = false;
    chance = 5;
    chanceArea.textContent = `남은 기회 : ${chance}번`
    userNum = [];
}


random();
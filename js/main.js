// 랜덤번호 지정
// 유저가 번호를 입력 -> go 버튼을 누름 
// 만약 유저가 랜덤 번호를 맞춤 = 맞췄습니다!
// 랜덤번호가 < 유저번호 -> down
// 랜덤번호가 > 유저번호 -> up
// reset버튼을 누르면 게임 리셋
// 5번의 기회를 다 쓰면 게임이 끝 (더이상 추측불가 버튼 비활성화)
// 유저가 1~100 범위 밖의 숫자를 입력하면 알려줌. 기회를 깎지 않음
// 유저가 이미 중복된 숫자를 입력하면 알려주고 기회를 깎지않음

let computerNum = 0
let playBtn = document.getElementById("play-btn");
let userInput = document.getElementById("user-input");
let result = document.getElementById("result-area");
let resetBtn = document.getElementById("reset-btn");
let chance = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];


playBtn.addEventListener("click", play)
resetBtn.addEventListener("click", reset)
userInput.addEventListener("focus", function(){
    userInput.value = "";
})

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1 //Math.random 은 0~1사이의 있는 숫자를 호출
    console.log("정답", computerNum);
}


function play(){
    let userValue = userInput.value;

    if(userValue < 1 || userValue > 100){
        result.textContent = "1과 100사이 숫자를 입력해주세요."
        return;
    }

    if(history.includes(userValue)){
        result.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요."
        return;
    }

    chance --;
    chanceArea.textContent = `남은기회 = ${chance}번`;

    if(userValue < computerNum){
        result.textContent = "UP!!!"
    } else if(userValue > computerNum){
        result.textContent = "DOWN!!!"
    } else{
        result.textContent = "정답입니다!!!"
        gameOver = true;
    }

    history.push(userValue)

    if(chance < 1){
        gameOver = true;
    }

    if(gameOver == true){
        playBtn.disabled = true;
    }
}

function reset(){
    // user input창 깨끗하게 정리
    userInput.value = ""
    // 새로운 번호가 생성
    pickRandomNum()

    result.textContent="결과값이 이곳에 표시됩니다."
    gameOver = false;
    playBtn.disabled = false;
    chance = 5;
    chanceArea.innerText = `남은 기회 = ${chance}번`
    userValue = [];
}

pickRandomNum();

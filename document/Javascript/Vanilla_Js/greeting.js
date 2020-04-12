const form = document.querySelector(".js-form"),
 input = form.querySelector("input"),
 greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}


function handleSubmit(event){
    event.preventDefault(); // 현재 이벤트의 기본 동작 중단
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);

}
//currentuser라는 사용자가 있을 때 hello 문구 등장
function paintGreeting (text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}
function loadName(){ //로컬 스토리지에서 이름 가져오는 함수
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}
function init(){
    loadName();
}
init();
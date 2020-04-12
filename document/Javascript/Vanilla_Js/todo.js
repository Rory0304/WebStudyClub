const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos= [];

/*deleteToDo() : li의 id와 toDo의 id가 일치하지 않으면 true인 값으로 새로운 toDos array 생성하는 함수 */ 
function deleteToDo(event){
    const btn = event.target; // event의 target : 버튼이 계속 뜨게 함
    const li = btn.parentNode; 
    toDoList.removeChild(li);
    //(중요)<filter> 는 array의 모든 아이템을 통해 함수를 실행하고 true인 아이템들만 가지고 새로운 array를 만듬
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos=cleanToDos;
    saveToDos();
}
/*saveToDos() : ToDos 목록을 localStorage에 저장해주는 함수*/ 
function saveToDos(){
    //localSotrage는 js의 data를 불러오지 못함 json.stringify 는 js object를 string으로 바꿔줌 
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

/*paintToDo() : text를 받아서 todo 목록을 꾸며주고 + toDoObj 객체 생성 해주는 함수*/
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML="❌";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id=newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    }
    toDos.push(toDoObj);
    saveToDos();
}
 
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}
/*loadToDos() : local Storage에서 todo 목록이 있으면 화면에 표시해주는 함수*/ 
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        // toDos를 가져 온 후 object로 변환 
        const parsedToDos = JSON.parse(loadedToDos);
        // (중요) <forEach> 는 array function으로 배열 원소 하나하나에 함수를 적용시키는 것
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}
init();
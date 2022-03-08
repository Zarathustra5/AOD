//-----События нажатия на элементы меню------
let dialogueInput = document.querySelector(".dialogue_input");
let dialogueForm = document.querySelector(".dialogue__form");
let dialogueOutput = document.querySelector(".dialogue_output");
let answer;

//Асинхронность
function submit(callback){
  dialogueForm.onsubmit = () => callback(answer); 
}

//Данные формы
dialogueForm.addEventListener("submit", e => {
  e.preventDefault();     
  let formData = new FormData(dialogueForm);
  if (formData.get("answer") != ""){
    dialogueInput.classList.remove("_active");
    answer = formData.get("answer");
    dialogueForm.querySelector(".input").value = "";
  }
});

//Создание объекта plan
let tisbi;
submit(answer => tisbi = new Institution(answer));

//1.Вывести название плана
function showName() {
  dialogueOutput.classList.add("_active");
  dialogueOutput.lastElementChild.lastElementChild.textContent = tisbi.getName;
}

//2.Изменить название плана
function changeName() {
  dialogueInput.querySelector(".label").textContent = "Введите новое название учреждения";
  dialogueInput.classList.add("_active");
  submit(answer => tisbi.setName = answer);
}

//3.Добавить план
function addPlan() {
  dialogueInput.querySelector(".label").textContent = "Введите название плана";
  dialogueInput.classList.add("_active");
  submit(answer => tisbi.addPlan = answer);
}

//4.Удалить план
function deletePlan() {
  dialogueOutput.classList.add("_active");
  dialogueOutput.lastElementChild.lastElementChild.textContent = tisbi.deletePlan();
}

//5.Вывести всю информацию
function getInfo() {
  dialogueOutput.classList.add("_active");
  dialogueOutput.lastElementChild.lastElementChild.textContent = tisbi.getInfo;
}

//6.Выбрать план
function choosePlan() {
}
//Кнопка закрыть
let closeBtn = document.querySelectorAll("hr.close");
closeBtn.forEach(el => {
  el.onclick = () => {
    el.parentElement.parentElement.parentElement.classList.remove("_active");
  }
});

let fullscreenBtn = document.querySelectorAll("hr.fullscreen");
fullscreenBtn.forEach(el => {
  el.onclick = () => {
    el.parentElement.parentElement.parentElement.classList.toggle("_fullscreen");
  }
});

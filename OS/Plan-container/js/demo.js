//-----События нажатия на элементы меню------
let dialogueInput = document.querySelector(".dialogue_input");
let dialogueForm = document.querySelector(".dialogue__form");
let dialogueOutput = document.querySelector(".dialogue_output");
let answer;
let currentPlan = null;

//Асинхронность
function submit(callback){
  dialogueForm.onsubmit = () => callback(answer); 
}

//Данные формы ввода
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
  let mas = tisbi.getPlans;
  if(mas.length > 0){
    let windowPlan = document.querySelector(".plan");
    let titlePlan = document.querySelector(".plan .window__body .title");
    titlePlan.insertAdjacentHTML("afterend", `<select><option>Выберите план</option></select>`);
    for (let el of mas){
      let selectPlan = document.querySelector(".plan select");
      selectPlan.insertAdjacentHTML("beforeend", `<option>${el.getName}</option>`);
      selectPlan.lastElementChild.onclick = () => currentPlan = el;
    }
    windowPlan.classList.add("_active");
  }else{
    dialogueOutput.classList.add("_active");
    dialogueOutput.lastElementChild.lastElementChild.textContent = "Сначала добавьте план";
  }
}
//Кнопка закрыть
let closeBtn = document.querySelectorAll("hr.close");
closeBtn.forEach(el => {
  el.onclick = () => {
    let closedWindow = el.parentElement.parentElement.parentElement;
    closedWindow.classList.remove("_active");
    if (closedWindow.classList.contains("plan")){
      closedWindow.querySelector("select").remove();
    }
  }
});

let fullscreenBtn = document.querySelectorAll("hr.fullscreen");
fullscreenBtn.forEach(el => {
  el.onclick = () => {
    el.parentElement.parentElement.parentElement.classList.toggle("_fullscreen");
  }
});

//-----События нажатия на элементы меню------
//1.Вывести название плана
function showPlanName() {
  alert(currentPlan.getName);
}

//2.Изменить название плана
function changePlanName() {
  currentPlan.setName = prompt("Введите новое название:");
}

//3.Вывести предмет
function showPlanHours() {
  alert(currentPlan.getHours(prompt("Введите название предмета:")));
}

//4.Добавить предмет и часы
function addPlanHours() {
  currentPlan.addHours(prompt("Введите название предмета:"), prompt("Введите количество часов:"));
}

//5.Изменить часы
function changePlanHours() {
  currentPlan.changeHours(prompt("Введите название предмета:"), prompt("Введите новое значение:"));
}

//6.Сумма
function showPlanSum() {
  alert(currentPlan.getHoursSum);
}

//7.Показать всю информацию
function showPlanData() {
  alert(currentPlan.getData);
}

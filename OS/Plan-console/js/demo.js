//Создание объекта plan
let plan = new Plan(prompt("Введите название плана:"));

//-----События нажатия на элементы меню------
//1.Вывести название плана
function showName() {
  alert(plan.getName);
}

//2.Изменить название плана
function changeName() {
  plan.setName = prompt("Введите новое название:");
}

//3.Вывести предмет
function showHours() {
  alert(plan.getHours(prompt("Введите название предмета:")));
}

//4.Добавить предмет и часы
function addHours() {
  plan.addHours(prompt("Введите название предмета:"), prompt("Введите количество часов:"));
}

//5.Изменить часы
function changeHours() {
  plan.changeHours(prompt("Введите название предмета:"), prompt("Введите новое значение:"));
}

//6.Сумма
function showSum() {
  alert(plan.getHoursSum);
}

//7.Показать всю информацию
function showData() {
  alert(plan.getData);
}

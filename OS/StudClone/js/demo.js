//Создание объекта stud1
var stud1 = new Stud(prompt("Введите имя студента:"));

//-----События нажатия на элементы меню------
//1.Вывести фамилию
function showName() {
  alert(stud1.getName());
}

//2.Изменить фамилию
function changeName() {
  stud1.setName(prompt("Введите новую фамилию:"));
}

//3.Вывести оценку
function showOcenki() {
  alert(stud1.getOcenki(prompt("Введите индекс:")));
}

//4.Добавить оценку
function addOcenki() {
  stud1.addOcenki(prompt("Введите новую оценку:"));
}

//5.Изменить оценку
function changeOcenki() {
  stud1.changeOcenki(prompt("Введите индекс:"), prompt("Введите новую оценку:"));
}

//6.Средний балл
function showAverage() {
  alert(stud1.getOcenkiAverage());
}

//7.Показать всю информацию
function showData() {
  alert(stud1.getData());
}

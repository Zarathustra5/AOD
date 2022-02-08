//Создание объекта stud1
//let stud1 = new Stud(prompt("Введите имя студента:"));
let PI_012 = new Group(prompt("Введите название группы:"));


//-----События нажатия на элементы меню------
//1.Вывести фамилию
function showSurname() {
  alert(stud1.getSurname);
}

//2.Изменить фамилию
function changeSurname() {
  stud1.setSurname = prompt("Введите новую фамилию:");
}

//3.Вывести оценку
function showScore() {
  alert(stud1.getScore(prompt("Введите индекс:")));
}

//4.Добавить оценку
function addScore() {
  stud1.addScore = prompt("Введите новую оценку:");
}

//5.Изменить оценку
function changeScore() {
  stud1.changeScore(prompt("Введите индекс:"), prompt("Введите новую оценку:"));
}

//6.Средний балл
function showAverage() {
  alert(stud1.getScoreAverage);
}

//7.Показать всю информацию
function showData() {
  alert(stud1.getData);
}

//Создание контейнера группы
let PI_012 = new Group(prompt("Введите название группы:"));


//-----События нажатия на элементы меню------
//1.Добавить студента
function addStud() {
  PI_012.addStud = new Stud(prompt("Введите имя студента:"));
}

//2.Удалить студента
function delStud() {
  alert(PI_012.delStud());
}

//3.Показать всю информацию
function getData() {
  alert(PI_012.getData);
}

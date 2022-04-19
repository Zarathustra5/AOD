//Создание контейнера группы
let group;
let count = 0;
let temp = new Group();

//-----События нажатия на элементы меню------
//1.Добавить студента
function addStud() {
  group.addStud = new Stud(prompt("Введите имя студента:"));
}

//2.Удалить студента
function delStud() {
  alert(group.delStud());
}

//3.Показать всю информацию
function getData() {
  alert(group.getData);
}

//4.Создать новую группу
function newGroup() {
  group = new Group(prompt("Введите название группы:"));
}

//5.Сохранить группу в localStorage
function saveGroup() {
  if (group){
    let json = JSON.stringify(group);
    localStorage.setItem(count++, json);
    alert("Группа успешно сохранена");
  }else{
    alert("Ошибка: сначала создайте группу");
  }
}

//6.Загрузить группу из localStorage
function loadGroup() {
  if (localStorage.length > 0){
    let answer = prompt("Введите индекс: ");
    for (let i = 0; i < localStorage.length; i++){
      if (i == answer){
        let json = localStorage.getItem(i);
        group = JSON.parse(json);
        group.__proto__ = temp.__proto__;
        alert("Группа успешно загружена")
        break;
      }
    }
  }else{
    alert("Хранилище пустое");
  }
}

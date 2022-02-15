//Класс контейнера
class Group{
  constructor(name){      //Конструктор
    this._name = name;  //Название группы
    this._studs = [];   //Массив объектов студентов
  }
  set addStud(newStud){   //Сеттер добавления студента
    this._studs.push(newStud);
  }
  delStud(){              //Метод удаления последнего студента
    if (this._studs.length > 0){
      this._studs.pop();
      return "Последний студент удален успешно"
    }else{
      return "Студенты не найдены"
    }
  }
  get getData(){        //Геттер вывода информации всех объектов студентов
    let res = "";
    for (let el of this._studs){
      res += el.getData + "\n";
    }
    return res;
  }
}

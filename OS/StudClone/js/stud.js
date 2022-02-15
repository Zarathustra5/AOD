//Объявление класса Stud
class Stud{
  constructor(name){     //Конструктор
    this._name = name;
    this._ocenki = [];
  }
  getName(){         //Геттер, возвращающий фамилию
    return this._name;
  }
  setName(newName){   //Сеттер, изменяющий фамилию
    if (newName != null){
      this._name = newName;
    }
  }
  getOcenki(num){     //Метод вывода оценки по индексу
    if (num < this._ocenki.length){
      return this._ocenki[num];
    }else{
      return "Оценка по данному индексу не найдена";
    }
  }
  addOcenki(newOcenki){       //Сеттер добавления оценки
    if (newOcenki == 2 || newOcenki == 3 || newOcenki == 4 || newOcenki == 5){
      this._ocenki.push(newOcenki);
    }else{
      alert("Невозможная оценка");
    }
  }
  changeOcenki(num, newOcenki){    //Метод изменения оценки
    if (newOcenki == 2 || newOcenki == 3 || newOcenki == 4 || newOcenki == 5){
      if (num < this._ocenki.length){
        this._ocenki[num] = newOcenki;
      }else{
        alert("Оценка по данному индексу не найдена");
      }
    }else{
      alert("Невозможная оценка");
    }
  }
  getOcenkiAverage(){          //Геттер, возвращающий среднее значение
    var sum = 0;
    for (var i = 0; i < this._ocenki.length; i++){
      sum += Number(this._ocenki[i]);
    }
    return sum / this._ocenki.length;
  }
  getData(){   //Геттер, возвращающий полную информацию о студенте 
    return this._name + ":  " + this._ocenki;
  }
}

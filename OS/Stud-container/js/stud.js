//Объявление класса Stud
class Stud{
  constructor(surname){     //Конструктор
    this._surname = surname;   //фамилия студента (знак "_" в начале означает закрытое свойство
    this._score = [];          //оценки студента 
  }
  get getSurname(){         //Геттер, возвращающий фамилию
    return this._surname;
  }
  set setSurname(newSurname){   //Сеттер, изменяющий фамилию
    if (newSurname != null){
      this._surname = newSurname;
    }
  }
  getScore(num){     //Метод вывода оценки по индексу
    if (num < this._score.length){
      return this._score[num];
    }else{
      return "Оценка по данному индексу не найдена";
    }
  }
  set addScore(newScore){       //Сеттер добавления оценки
    if (newScore == 2 || newScore == 3 || newScore == 4 || newScore == 5){
      this._score.push(newScore);
    }else{
      alert("Невозможная оценка");
    }
  }
  changeScore(num, newScore){    //Метод изменения оценки
    if (newScore == 2 || newScore == 3 || newScore == 4 || newScore == 5){
      if (num < this._score.length){
        this._score[num] = newScore;
      }else{
        alert("Оценка по данному индексу не найдена");
      }
    }else{
      alert("Невозможная оценка");
    }
  }
  get getScoreAverage(){          //Геттер, возвращающий среднее значение
    if (this._score.length > 0){
      let sum = 0;
      for (let el of this._score){
        sum += Number(el);
      }
      return sum / this._score.length;
    }else{
      return "Нет оценок";
    }
  }
  get getData(){   //Геттер, возвращающий полную информацию о студенте 
    return this._surname + ":  " + this._score;
  }
}

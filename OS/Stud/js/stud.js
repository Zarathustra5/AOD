//Объявление класса Stud
class Stud{
  constructor(surname){     //Конструктор
    this.surname = surname;   //фамилия студента
    this.score = [];          //оценки студента 
  }
  get getSurname(){         //Геттер, возвращающий фамилию
    return this.surname;
  }
  set setSurname(newSurname){   //Сеттер, изменяющий фамилию
    if (newSurname != null){
      this.surname = newSurname;
    }
  }
  getScore = function(num){     //Метод вывода оценки по индексу
    if (num < this.score.length){
      return this.score[num];
    }else{
      return "Оценка по данному индексу не найдена";
    }
  }
  set addScore(newScore){       //Сеттер добавления оценки
    if (newScore == 2 || newScore == 3 || newScore == 4 || newScore == 5){
      this.score.push(newScore);
    }else{
      alert("Невозможная оценка");
    }
  }
  changeScore = function(newScore, num){    //Метод изменения оценки
    if (newScore == 2 || newScore == 3 || newScore == 4 || newScore == 5){
      if (num < this.score.length){
        this.score[num] = newScore;
      }else{
        alert("Оценка по данному индексу не найдена");
      }
    }else{
      alert("Невозможная оценка");
    }
  }
  get getScoreAverage(){          //Геттер, возвращающий среднее значение
    if (this.score.length > 0){
      let sum = 0;
      for (let el of this.score){
        sum += Number(el);
      }
      return sum / this.score.length;
    }else{
      return "Нет оценок";
    }
  }
  get getData(){   //Геттер, возвращающий полную информацию о студенте 
    return `${this.surname}:  ${this.score}`
  }
}

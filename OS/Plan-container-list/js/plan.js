//Объявление класса Stud
class Plan{
  constructor(name){     //Конструктор
    this._name = name;   //название плана (знак "_" в начале означает закрытое свойство
    this._subjects = {};          //часы предметов
    this._nextPlan;         //Следуюший план
  }
  get getNextPlan(){         //Геттер, возвращающий следующий план
    return this._nextPlan;
  }
  set setNextPlan(newNextPlan){   //Сеттер, изменяющий следующий план
    this._nextPlan = newNextPlan;
  }
  get getName(){         //Геттер, возвращающий название плана
    return this._name;
  }
  set setName(newName){   //Сеттер, изменяющий название плана
    if (newName != null){
      this._name = newName;
    }
  }
  getHours(subject){     //Метод вывода часов по названию предмета
		for (let el in this._subjects){
			if (el == subject){
				return this._subjects[subject];
			}
		}
		alert("Предмет не найден");
  }
  addHours(newSubject, newHours){       //Метод добавления предмета и часов
    if (newHours >= 0){
      this._subjects[newSubject] = newHours;
    }else{
      alert("Невозможное значение");
    }
  }
  changeHours(subject, newHours){    //Метод изменения часов
    if (newHours >= 0){
			for (let el in this._subjects){
				if (el == subject){
					this._subjects[subject] = newHours;
					return 0;
				}
			}
      alert("Предмет не найден");
    }else{
      alert("Невозможное значение");
    }
  }
  get getHoursSum(){          //Геттер, возвращающий сумму часов
		let sum = 0;
		for (let el in this._subjects){
			sum += Number(this._subjects[el]);
		}
		return sum;
  }
  get getData(){   //Геттер, возвращающий полную информацию
		let res = this._name + "\n";
		for (let el in this._subjects){
			res += el + ": " + this._subjects[el] + ";" + "\n";
		}
    res += "\nСумма часов: " + this.getHoursSum;
    return res;
  }
}

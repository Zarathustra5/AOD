//Объявление класса Stud
class Institution{
  constructor(name){     //Конструктор
    this._name = name;   //название учреждения планов (знак "_" в начале означает закрытое свойство)
    this._firstPlan = null;    //Первый план
  }
  get getName(){         //Геттер, возвращающий название учреждения 
    return this._name;
  }
  set setName(newName){   //Сеттер, изменяющий название учреждения
    if (newName != null){
      this._name = newName;
    }
  }
  set addPlan(newPlan){       //Сеттер добавления плана
    let plan = new Plan(newPlan);
    plan.setNextPlan = this._firstPlan;
    this._firstPlan = plan;
  }
  deletePlan(){       //Метод удаления плана
    if (this._firstPlan != null){
      this._firstPlan = this._firstPlan.getNextPlan;
      return "План успешно удален";
    }else{
      return "Планов не найдено";
    }
  }
  getInfo(){        //Метод получения всей информации
    if (this._firstPlan != null){
      let temp = this._firstPlan;
      function loop(temp){
        if (temp == null) return -1;
        alert(temp.getData);
        loop(temp.getNextPlan);
      }
      loop(temp);
    }else{
      alert("Планов не найдено");
    }
  }
  choosePlan(){       //Метод выбора плана
  }
  searchPlan(planName){  //Метод поиска плана
    let temp = this._firstPlan;
    let count = 0;
    while(temp != null){
      if (temp.getName == planName){
        return count;
      }
      count++;
      temp = temp.getNextPlan;
    }
    return -1;
  }
  get getFirstPlan(){        //Геттер получения массива планов
    return this._firstPlan;
  }
}

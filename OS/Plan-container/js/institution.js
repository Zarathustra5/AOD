//Объявление класса Stud
class Institution{
  constructor(name){     //Конструктор
    this._name = name;   //название учреждения планов (знак "_" в начале означает закрытое свойство)
    this._plans = [];          //планы
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
    this._plans.push(new Plan(newPlan));
  }
  deletePlan(){       //Метод удаления плана
    if (this._plans.length > 0){
      this._plans.pop();
      return "План успешно удален";
    }else{
      return "Планов не найдено";
    }
  }
  get getInfo(){
    if (this._plans.length > 0){
      let res = "";
      for (let el of this._plans){
        res += el.getData;
      }
      return res;
    }else{
      return "Планов не найдено";
    }
  }
  choosePlan(index){
    if (this._plans.length > 0){
      if (index < this._plans.length){
        return this._plans[index];
      }else{
        return "План по данному индексу не найден";
      }
    }else{
      return "Планов не найдено";
    }
  }
  get getPlans(){
    return this._plans;
  }
}

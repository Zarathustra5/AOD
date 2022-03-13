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
  searchPlan(planName){  //Метод поиска плана
    let res = -1;
    for (let i = 0; i < this._plans.length; i++){
      if (this._plans[i].getName == planName){
        res = i;
        break;
      }
    }
    return res >= 0 ? res : "План не найден";
  }
  getInfo(){        //Метод получения всей информации
    if (this._plans.length > 0){
      for (let el of this._plans){
        alert(el.getData);
      }
    }else{
      alert("Планов не найдено");
    }
  }
  choosePlan(){       //Метод выбора плана
    if(this._plans.length > 0){
      let windowPlan = document.querySelector(".plan");
      let titlePlan = document.querySelector(".plan .window__body .title");
      titlePlan.insertAdjacentHTML("afterend", `<select><option>Выберите план</option></select>`);
      for (let el of this._plans){
        let selectPlan = document.querySelector(".plan select");
        selectPlan.insertAdjacentHTML("beforeend", `<option>${el.getName}</option>`);
        selectPlan.lastElementChild.onclick = () => currentPlan = el;
      }
      windowPlan.classList.add("_active");
    }else{
      dialogueOutput.classList.add("_active");
      dialogueOutput.lastElementChild.lastElementChild.textContent = "Сначала добавьте план";
    }
  }
}

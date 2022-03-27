//Случайный массив
function getRandomArr(n){
  let arr = [];
  for (let i = 0; i < n; i++){
    arr[i] = Math.floor(Math.random() * 200 - 100);
  }
  return arr;
}
//Метод вставкой
function paste(arr){
  let res = arr.map(x => x);
  let comparesCount = 0;
  let changesCount = 0;
  for (let i = 1; i < res.length; i++){
    temp = res[i]; j = i - 1;
    while (true){
      comparesCount++;
      changesCount++;
      if (!(j >= 0 && temp < res[j])) break;
      res[j + 1] = res[j--]
    }
    res[j + 1] = temp;
  }
  return `Число сравнений: ${comparesCount}\nЧисло пересылок: ${changesCount}\nМассив: ${res}`;
}
//Метод пузырьком
function bubble(arr){
  let res = arr.map(x => x);
  let comparesCount = 0;
  let changesCount = 0;
  for (let j = 0; j < res.length - 1; j++){
    for (let i = 0; i < res.length - 1; i++){
      comparesCount++;
      if (res[i] > res[i + 1]){
        changesCount++;
        let mediator = res[i];
        res[i] = res[i + 1];
        res[i + 1] = mediator;
      }
    }
  }
  return `Число сравнений: ${comparesCount}\nЧисло изменений: ${changesCount}\nМассив: ${res}`;
}

//Меню
let isProgramActive = true;
let arr;
function menu(){
  switch(prompt("Меню\n1.Создать случайный массив\n2.Сортировка вставками\n3.Сортировка обменом(метод пузырька)\n4.Выход")){
    case "1":
      arr = getRandomArr(prompt("Введите количество элементов"));
      alert(arr);
      break;
    case "2":
      alert(paste(arr));
      break;
    case "3":
      alert(bubble(arr));
      break;
    case "4":
      isProgramActive = false;
      break;
    default:
      break;
  }
}
while(isProgramActive){menu()}

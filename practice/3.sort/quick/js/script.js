//Случайный массив
function getRandomArr(n){
  let arr = [];
  for (let i = 0; i < n; i++){
    arr[i] = Math.floor(Math.random() * 200 - 100);
  }
  return arr;
}

//Быстрая сортировка
function quick(left, right){
  let i = left, j = right;
  let center = arr[Math.floor((left + right) / 2)];
  do{
    while(arr[i] < center){
      comparesCount++;
      i++;
    }
    while(arr[j] > center){
      comparesCount++;
      j--;
    }
    comparesCount++;
    if (i <= j){
      changesCount++;
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++; j--;
    }
    comparesCount++;
  }while(i < j);
  comparesCount++;
  if (left < j) quick(left, j);
  comparesCount++;
  if (right > i) quick(i, right);
  return `Число сравнений: ${comparesCount}\nЧисло изменений: ${changesCount}\nМассив: ${arr}`;
}

//Меню
let isProgramActive = true;
let arr;
let comparesCount;
let changesCount;
function menu(){
  switch(prompt("Меню\n1.Создать случайный массив\n2.Быстрая сортировка\n3.Выход")){
    case "1":
      arr = getRandomArr(prompt("Введите количество элементов"));
      alert(arr);
      break;
    case "2":
      comparesCount = 0;
      changesCount = 0;
      alert(quick(0, arr.length));
      break;
    case "3":
      isProgramActive = false;
      break;
    default:
      break;
  }
}
while(isProgramActive){menu()}

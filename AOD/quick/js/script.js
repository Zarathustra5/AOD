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
  let center = mas[Math.floor((left + right) / 2)];
  do{
    while(mas[i] < center) i++;
    while(mas[j] > center) j--;
    if (i <= j){
      temp = mas[i];
      mas[i] = mas[j];
      mas[j] = temp;
      i++; j--;
    }
  }while(i < j);
  if (left < j) quick(left, j);
  if (right > i) quick(i, right);
  return mas;
}

let mas = getRandomArr(100);
console.log(quick(0, 100));

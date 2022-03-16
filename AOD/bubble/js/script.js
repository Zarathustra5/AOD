//Случайный массив
function getRandomArr(n){
  let arr = [];
  for (let i = 0; i < n; i++){
    arr[i] = Math.floor(Math.random() * 200 - 100);
  }
  return arr;
}
//Метод пузырьком
function bubble(){
  let res = getRandomArr(100);
  for (let j = 0; j < res.length - 1; j++){
    for (let i = 0; i < res.length - 1; i++){
      if (res[i] > res[i + 1]){
        let mediator = res[i];
        res[i] = res[i + 1];
        res[i + 1] = mediator;
      }
    }
  }
  return res;
}
//Метод выбором
function choice(){
  let res = getRandomArr(100);
  let last = res.length;
  for (let j = 0; j < res.length; j++){
    let max = -1000;
    let k = j;
    for (let i = 0; i < last; i++){
      if (res[i] > max){
        max = res[i];
        k = i;
      }
    }
    res[k] = res[--last];
    res[last] = max;
  }
  return res;
}
//Метод вставкой
function paste(){
  let res = getRandomArr(100);
  for (let i = 1; i < res.length; i++){
    temp = res[i]; j = i - 1;
    while (j >= 0 && temp < res[j]){res[j + 1] = res[j--]}
    res[j + 1] = temp;
  }
  return res;
}
/*function paste(){
  let res = getrandomarr(100);
  for (let j = 1; j < res.length; j++){
    if (res[j] < res[j - 1]){
      for (let i = j - 1; i >= -1; i--){
        if (res[j] > res[i] || i === -1){
          let mediator = res[j];
          for (let k = j; k > i; k--){
            res[k] = res[k - 1];
          }
          res[i + 1] = mediator;
          break;
        }
      }
    }
  }
  return res;
}*/

console.log(bubble());
console.log(choice());
console.log(paste());

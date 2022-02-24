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
    for (let i = 0; i < last; i++){
      if (res[i] > max){
        max = res[i];
      }
    }
    last--;
    let mediator = max;
    res[res.indexOf(max)] = res[last];
    res[last] = mediator;
  }
  return res;
}
//Метод вставкой
function paste(){
  let res = getRandomArr(100);
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
}

console.log(bubble());
console.log(choice());
console.log(paste());

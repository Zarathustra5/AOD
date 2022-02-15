let mas = [6, 4, 3, 9, 5, 2, 7, 1, 8, 0];
function bubble(){
  let res = mas;
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
function choice(){
  let res = mas;
  for (let j = res.length - 1; j >= 0; j--){
    let max = -1000;
    for (let i = 0; i < res.length - 1; i++){
      if (res[i] > max){
        max = i;
      }
    }
    let mediator = res[j];
    res[j] = res[max];
    res[max] = mediator;
  }
  return res;
}
alert(bubble());
alert(choice());

//Класс вершины
class Node{
  constructor(key){
    this._key = key;
    this._leftChild = null;
    this._rightChild = null;
  }
}

//Глобальные переменные
let rootNode = new Node(Math.floor(Math.random() * 90 + 10));
createTree(prompt("Введите число вершин"));
let isProgramActive = true;

//Создание дерева
function createTree(n){
  for (let i = 1; i < n; i++){
    let temp = rootNode;
    let newNode = new Node(Math.floor(Math.random() * 90 + 10));
    while (true){
      if (newNode._key > temp._key){
        if (temp._rightChild == null) {
          temp._rightChild = newNode;
          break;
        }else{
          temp = temp._rightChild;
        }
      }else{
        if (temp._leftChild == null) {
          temp._leftChild = newNode;
          break;
        }else{
          temp = temp._leftChild;
        }
      }
    }
  }
}

//Добавить вершину
function addNode(n){
  let temp = rootNode;
  let newNode = new Node(n);
  while (true){
    if (newNode._key > temp._key){
      if (temp._rightChild == null) {
        temp._rightChild = newNode;
        break;
      }else{
        temp = temp._rightChild;
      }
    }else if (newNode._key < temp._key){
      if (temp._leftChild == null) {
        temp._leftChild = newNode;
        break;
      }else{
        temp = temp._leftChild;
      }
    }else{
      alert("Вершина уже существует");
      break;
    }
  }
}

//Поиск
function searchNode(n){
  let temp = rootNode;
  let count = 0;
  function loop(temp){
    if (n == temp._key) count++;
    if (temp._leftChild != null && n < temp._key) loop(temp._leftChild);
    if (temp._rightChild != null && n > temp._key) loop(temp._rightChild);
  }
  loop(temp);
  return `найдено ${count} повторений`;
}

//Симметричный порядок
function inOrder(){
  let res = "";
  let depth = 0;
  temp = rootNode;
  function loop(temp){
    if (temp._leftChild != null){
      depth++;
      loop(temp._leftChild);
      depth--;
    }
    res += "\t".repeat(depth) + temp._key + "\n";
    if (temp._rightChild != null){
      depth++;
      loop(temp._rightChild);
      depth--;
    }
  }
  loop(temp);
  alert(res);
}

//Обратный порядок
function postOrder(){
  let res = "";
  let depth = 0;
  temp = rootNode;
  function loop(temp){
    if (temp._leftChild != null){
      depth++;
      loop(temp._leftChild);
      depth--;
    }
    if (temp._rightChild != null){
      depth++;
      loop(temp._rightChild);
      depth--;
    }
    res += "\t".repeat(depth) + temp._key + "\n";
  }
  loop(temp);
  alert(res);
}

//Меню
function menu(){
  switch(prompt("Выберите действие:\n1.Добавить вершину\n2.Поиск вершины\n3.Вывод в симметричном порядке\n4.Вывод в обратном порядке\n5.Выход")){
    case "1":
      addNode(Number(prompt("Введите число")));
      break;
    case "2":
      alert(searchNode(Number(prompt("Введите вершину"))));
      break;
    case "3":
      inOrder();
      break;
    case "4":
      postOrder();
      break;
    case "5":
      isProgramActive = false;
      break;
    default:
      break;
  }
}
while(isProgramActive){menu()}

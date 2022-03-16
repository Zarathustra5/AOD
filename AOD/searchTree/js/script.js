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
    addNode(Math.floor(Math.random() * 90 + 10));
  }
  console.log(rootNode);
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
  let isFound = false;
  function loop(temp){
    if (n == temp._key){
      isFound = true;
      return -1;
    }
    if (temp._leftChild != null && n < temp._key) loop(temp._leftChild);
    if (isFound == true) return -1;
    if (temp._rightChild != null && n > temp._key) loop(temp._rightChild);
  }
  loop(temp);
  return isFound ? `вершина ${n} найдена` : `вершина ${n} не найдена`;
}

//Прямой порядок
function preOrder(){
  let res = "";
  temp = rootNode;
  function loop(temp){
    res += " " + temp._key;
    if (temp._leftChild != null) loop(temp._leftChild);
    if (temp._rightChild != null) loop(temp._rightChild);
  }
  loop(temp);
  console.log(res);
}

//Симметричный порядок
function inOrder(){
  let res = "";
  temp = rootNode;
  function loop(temp){
    if (temp._leftChild != null) loop(temp._leftChild);
    res += " " + temp._key;
    if (temp._rightChild != null) loop(temp._rightChild);
  }
  loop(temp);
  console.log(res);
}

//Обратный порядок
function postOrder(){
  let res = "";
  temp = rootNode;
  function loop(temp){
    if (temp._leftChild != null) loop(temp._leftChild);
    if (temp._rightChild != null) loop(temp._rightChild);
    res += " " + temp._key;
  }
  loop(temp);
  console.log(res);
}

function menu(){
  switch(prompt("Выберите действие:\n1.Добавить вершину\n2.Поиск вершины\n3.Вывод в прямом порядке\n4.Вывод в симметричном порядке\n5.Вывод в обратном порядке\n6.Удаление вершины\n7.Выход")){
    case "1":
      addNode(Number(prompt("Введите число")));
      console.log(rootNode);
      break;
    case "2":
      alert(searchNode(Number(prompt("Введите вершину"))));
      break;
    case "3":
      preOrder();
      break;
    case "4":
      inOrder();
      break;
    case "5":
      postOrder();
      break;
    case "6":
      break;
    case "7":
      isProgramActive = false;
      break;
    default:
      break;
  }
}
while(isProgramActive){menu()}

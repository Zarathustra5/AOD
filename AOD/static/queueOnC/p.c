#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

//Объявление переменных
int answer,
    first = 0,
    last = 0,
    count = 0,
    arr[5] = {};
_Bool isProgramActive = true;

//Функция добавления элемента в стек
void Add()
{
  if (count < 5){
    printf("Введите число: \n");
    scanf("%d", &arr[last]);
    last++;
    if (last > 4) last = 0;
    count++;
  }else{
    printf("Стек заполнен \n");
  }
}

//Функция удаления элементов из стека 
void Del()
{
  if (count > 0){
    first++;
    if (first > 4) first = 0;
    count--;
  }else{
    printf("Стек пустой \n");
  }
}

//Функция вывода стека
void Display()
{
  printf("*** \n");
  for (int i = first; i < count + first; i++){
    if (i > 4){
      printf("%d\n", arr[i-5]);
    }else{
      printf("%d\n", arr[i]);
    }
  }
  printf("*** \n");
}

//Функция уничтожения стека
void Destroy()
{
  isProgramActive = false;
}

//Функция вызова диалогового меню
void Menu()
{
  printf("1.Добавить элемент \n2.Удалить элемент \n3.Вывести стек \n4.Выйти \n");
  scanf("%d", &answer);
  switch(answer){
    case 1:
      Add(); 
      break;
    case 2:
      Del();
      break;
    case 3:
      Display();
      break;
    case 4:
      Destroy();
      break;
    default:
      printf("Неправильный ответ");
      break;
  }
}

//Главная функция
void main()
{
  //Зацикливание меню
  do{Menu();}while(isProgramActive);
}

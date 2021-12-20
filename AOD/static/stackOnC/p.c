#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

//Объявление переменных
int answer,
    sp = 0,
    arr[5] = {};
_Bool isProgramActive = true;

//Функция добавления элемента в стек
void Add()
{
  if (sp < 5){
    printf("Введите число: \n");
    scanf("%d", &arr[sp]);
    sp++;
  }else{
    printf("Стек заполнен \n");
  }
}

//Функция удаления элементов из стека 
void Del()
{
  if (sp > 0){
    arr[sp] = 0;
    sp--;
  }else{
    printf("Стек пустой \n");
  }
}

//Функция вывода стека
void Display()
{
  printf("*** \n");
  for (int i = 0; i < sp; i++){
    printf("%d\n", arr[i]);
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

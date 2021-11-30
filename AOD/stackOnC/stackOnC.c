#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

//Тип(запись)
struct StackItem
{
  char info[80];
  int pointer;
  struct StackItem *pred;
};

//Объявление переменных
int answer;
int sp = 0;
_Bool isProgramActive = true;
int mas[5];
struct StackItem *SP;
struct StackItem *pTemp;
int *pArrInt;

int main()
{
    SP = NULL;
    pTemp = malloc(sizeof(struct StackItem));
    pTemp -> pointer = 0;
    pArrInt = malloc(5 * sizeof(int));
    //Зацикливание меню
    do{Menu();}while(isProgramActive);
}

//Функция вызова диалогового меню
int Menu()
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
      isProgramActive = false;
      break;
    default:
      printf("Неправильный ответ");
      break;
  }
}

//Функция добавления элемента в стек (не больше 5 элементов)
int Add()
{
  pTemp -> pred = SP;
  if (pTemp -> pointer < 5){
    printf("Введите число: \n");
    scanf("%d", &pArrInt[pTemp -> pointer]);
    pTemp -> pointer++;
    SP = pTemp;
  }else{
    printf("Стек заполнен \n");
  }
}

//Функция удаления элементов из стека 
int Del()
{
  if (pTemp -> pointer > 0){
    pArrInt[pTemp -> pointer-1] = 0;
    pTemp -> pointer--;
  }else{
    printf("Стек пустой \n");
  }
}

//Функция вывода стека
int Display()
{
  printf("*** \n");
  for(int i = 0; i < pTemp -> pointer; i++){
    if (pArrInt[i] > 0){
      printf("%d\n", pArrInt[i]);
    }
  }
  printf("*** \n");
}

#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

//Объявление переменных
int answer,
    fIndex,
    beforeAfter,
    count = 0,
    arr[5] = {};
_Bool isProgramActive = true;

//Функция добавления элемента в стек
int Search()
{
  printf("Введите число из списка: \n");
  scanf("%d", &answer);
  for (int i = 0; i < count; i++){
    if (arr[i] == answer){
      return i;
    }
  }
  return -1;
}
//Функция добавления элемента в стек
void Add()
{
  if (count < 5){
    if (count == 0){
      printf("Введите число: \n");
      scanf("%d", &answer);
      arr[0] = answer;
      count++;
    }else{
      fIndex = Search();
      if (fIndex > -1){
        printf("Вставка: \n1.Перед \n2.После\n");
        scanf("%d", &beforeAfter);
        printf("Введите число: \n");
        scanf("%d", &answer);
        switch (beforeAfter){
          case 1:
            for (int i = count; i >= fIndex; i--){
              arr[i + 1] = arr[i];
            }
            arr[fIndex] = answer;
            count++;
            break;
          case 2:
            for (int i = count; i > fIndex; i--){
              arr[i + 1] = arr[i];
            }
            arr[fIndex + 1] = answer;
            count++;
            break;
          default:
            printf("Неправильный вариант\n");
            break;
        }
      }else{
        printf("Число не найдено\n");
      }
    }
  }else{
    printf("Стек заполнен \n");
  }
}

//Функция удаления элементов из стека 
void Del()
{
  if (count > 0){
    fIndex = Search();
    if (fIndex > -1){
      if (count == 1){
        arr[fIndex] = arr[fIndex + 1];
      }else{
        for (int i = fIndex; i < count; i++){
          arr[i] = arr[i + 1];
        }
      }
      count--;
    }else{
      printf("Число не найдено\n");
    }
  }else{
    printf("Стек пустой \n");
  }
}

//Функция вывода стека
void Display()
{
  printf("*** \n");
  for (int i = 0; i < count; i++){
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

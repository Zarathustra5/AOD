#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

//Тип(запись)
struct ListItem
{
  char info[80];
  struct ListItem *next;
};

//Объявление переменных
int answer;
_Bool isProgramActive = true;
struct ListItem *pInput;
struct ListItem *pFirst;
struct ListItem *pNew;
struct ListItem *pTemp;
struct ListItem *pBeforeAfter;
char beforeAfter[80];

int main()
{
  pFirst = NULL;
  //Зацикливание меню
  do{Menu();}while(isProgramActive);
}

//Функция вызова диалогового меню
int Menu()
{
  printf("1.Добавить элемент \n2.Удалить элемент \n3.Вывести список \n4.Выйти \n");
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
      printf("Неправильный ответ \n");
      break;
  }
}

//Функция добавления элемента 
int Add()
{
  //Проверка списка на пустоту
  if (pFirst == NULL){
    pFirst = malloc(sizeof(struct ListItem));
    printf("Введите число: \n");
    scanf("%s", pFirst -> info);
    pFirst -> next = NULL;
  }else{
    pInput = malloc(sizeof(struct ListItem));
    printf("Число из списка: \n");
    scanf("%s", pInput -> info);
    pTemp = malloc(sizeof(struct ListItem));
    pTemp = pFirst;
    //Проверка наличия элемента в списке
    while (pTemp != NULL){
      if (*pTemp -> info == *pInput -> info){
        break;
      }else{
        pTemp = pTemp -> next;
      }
    };
    if (pTemp != NULL){
      printf("Как вставить(перед/после): \n");
      scanf("%s", beforeAfter);
      char beforeAfter = "перед";
      if (beforeAfter == "перед"){
        printf(beforeAfter);
      }else{
        pNew = malloc(sizeof(struct ListItem));
        printf("Введите число: \n");
        scanf("%s", pNew -> info);
        pNew -> next = pTemp -> next;
        pTemp -> next = pNew;
      }
    }else{
      printf("Элемент не найден \n");
    }
  }
}

//Функция удаления элементов
int Del()
{
  /*if (pLast != NULL){
    pTemp = pFirst;
    pFirst = pFirst -> next;
    if (pFirst == NULL){
      pLast = NULL;
    }
    free(pTemp);
  }else{
    printf("Очередь пустая \n");
  }*/
}

//Функция вывода 
int Display()
{
  printf("*** \n");
  pTemp = pFirst;
  while(pTemp != NULL){
    printf("%s\n", pTemp -> info);
    pTemp = pTemp -> next;
  }
  printf("*** \n");
}

//Функция освобождения памяти и уничтожения списка
int Destroy()
{
  isProgramActive = false;
  while(pFirst != NULL){
    pTemp = pFirst;
    pFirst = pFirst -> next;
    free(pTemp);
  }
}

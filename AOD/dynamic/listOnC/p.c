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
_Bool isProgramActive = true;
int answer,
    beforeAfter;
struct ListItem *pInput,
                *pFirst,
                *pNew,
                *pTemp,
                *pPrev;

//Функция поиска по списку
void Search(){
  pInput = malloc(sizeof(struct ListItem));
  pTemp = malloc(sizeof(struct ListItem));
  pPrev = malloc(sizeof(struct ListItem));
  printf("Число из списка: \n");
  scanf("%s", pInput -> info);
  pTemp = pFirst;
  while (pTemp != NULL){
    if (*pTemp -> info == *pInput -> info){
      break;
    }else{
      pPrev = pTemp;
      pTemp = pTemp -> next;
    }
  }
}

//Функция добавления элемента 
void Add()
{
  //Проверка списка на пустоту
  if (pFirst == NULL){
    pFirst = malloc(sizeof(struct ListItem));
    printf("Введите число: \n");
    scanf("%s", pFirst -> info);
    pFirst -> next = NULL;
  }else{
    //Проверка наличия элемента в списке
    Search();
    if (pTemp != NULL){
      printf("Как вставить: \n1.Перед \n2.После \n");
      scanf("%d", &beforeAfter);
      pNew = malloc(sizeof(struct ListItem));
      printf("Введите число: \n");
      scanf("%s", pNew -> info);
      switch (beforeAfter){
        case 1:
          //Проверка ситуации добавления перед первым
          pNew -> next = pTemp;
          if (pTemp == pFirst){
            pFirst = pNew;
          }else{
            pPrev -> next = pNew;
          }
          break;
        case 2:
          pNew -> next = pTemp -> next;
          pTemp -> next = pNew;
          break;
        default:
          printf("Неправильный ответ \n");
          break;
      }
    }else{
      printf("Элемент не найден \n");
    }
  }
}

//Функция удаления элементов
void Del()
{
  if (pFirst != NULL){
    Search();
    if (pFirst == pTemp){
      pFirst = pTemp -> next;
    }else{
      pNew = malloc(sizeof(struct ListItem));
      pNew = pTemp -> next;
      pPrev -> next = pNew;
    }
    free(pTemp);
  }else{
    printf("Список пустой \n");
  }
}

//Функция вывода 
void Display()
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
void Destroy()
{
  isProgramActive = false;
  while(pFirst != NULL){
    pTemp = pFirst;
    pFirst = pFirst -> next;
    free(pTemp);
  }
}

//Функция вызова диалогового меню
void Menu()
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

void main()
{
  pFirst = NULL;
  //Зацикливание меню
  do{Menu();}while(isProgramActive);
}

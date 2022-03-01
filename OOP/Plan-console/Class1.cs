using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//Объявление пространства имен
namespace Plan_console
{
    //Объявление класса План
    internal class Plan
    {
        private string name;   //Закрытое свойство названия плана
        private struct subject   //Закрытое свойство структуры предмета
        {
            private string name;
            private int[] score = new int[20];
        }
        private int subjectAmount;  //Закрытое свойство количества предметов
        public Plan(string newName)  //Конструктор
        {
            if (newName != "")
            {
                name = newName;
            }
            else
            {
                name = "Новый ученик";
            }
            subjectAmount = 0;
        }
        public string GetName()  //Геттер получения названия плана
        {
            return name;
        }
        public void SetName(string newName)  //Сеттер изменения названия плана
        {
            name = newName;
        }
        public string GetScore(int num)  //Геттер вывода часов по названию предмета
        {
            if (scoreAmount != 0)
            {
                if (num < scoreAmount)
                {
                    return score[num].ToString();
                }
                else
                {
                    return "Оценка не найдена";
                }
            }
            else
            {
                return "Массив пустой";
            }

        }
        public void AddScore(int newScore)  //Сеттер добавления предмета и часов
        {
            if (newScore == 2 || newScore == 3 || newScore == 4 || newScore == 5)
            {
                score[scoreAmount] = newScore;
                scoreAmount++;
            }
            else
            {
                Console.WriteLine("Недопустимая оценка");
            }
        }
        public void SetScore(int num, int newScore)  //Сеттер изменения часов у предмета
        {
            if (num < scoreAmount)
            {
                if (newScore == 2 || newScore == 3 || newScore == 4 || newScore == 5)
                {
                    score[num] = newScore;
                }
                else
                {
                    Console.WriteLine("Недопустимая оценка");
                }
            }
            else
            {
                Console.WriteLine("Оценка не найдена");
            }
        }
        public string GetAverage()  //Геттер, возвращающий  сумму всех часов
        {
            return (score.Sum() / scoreAmount).ToString();
        }
        public string GetInfo()  //Геттер, всю информацию
        {
            string res = name + "\nОценки: ";
            for (int i = 0; i < scoreAmount; i++)
            {
                res += score[i].ToString() + " ";
            }
            res += "\nСреднее:" + (score.Sum() / scoreAmount).ToString();
            return res;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Stud
    {
        private string surname;
        private int[] score = new int[20];
        private int scoreAmount;
        public Stud(string newSurname)
        {
            if (newSurname != "")
            {
                surname = newSurname;
            }
            else
            {
                surname = "Новый ученик";
            }
            scoreAmount = 0;
        }
        public string GetSurname()
        {
            return surname;
        }
        public void SetSurname(string newSurname)
        {
            surname = newSurname;
        }
        public string GetScore(int num)
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
        public void AddScore(int newScore)
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
        public void SetScore(int num, int newScore)
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
        public string GetAverage()
        {
            return (score.Sum() / scoreAmount).ToString();
        }
        public string GetInfo()
        {
            string res = surname + "\nОценки: ";
            for(int i = 0; i < scoreAmount; i++)
            {
                res += score[i].ToString() + " ";
            }
            res += "\nСреднее:" + (score.Sum() / scoreAmount).ToString();
            return res;
        }
    }
}

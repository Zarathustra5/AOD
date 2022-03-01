namespace Plan_console
{
    class Demo
    {
        static void Main()
        {
            //Описываем объектную переменную
            Plan plan1;
            Console.WriteLine("Введите имя студента:");
            //Создаем объект
            plan1 = new Plan(Console.ReadLine());
            //Функция меню
            bool isProgramActive = true;
            void Menu()
            {
                Console.WriteLine("1.Вывести фамилию\n2.Изменить фамилию\n3.Вывести оценку\n4.Добавить оценку\n5.Изменить оценку\n6.Средний балл\n7.Показать всю информацию\n8.Выход");
                switch (Console.ReadLine())
                {
                    case "1":
                        Console.WriteLine(plan1.GetName());
                        break;
                    case "2":
                        plan1.SetName(Console.ReadLine());
                        break;
                    case "3":
                        Console.WriteLine(plan1.GetScore(int.Parse(Console.ReadLine())));
                        break;
                    case "4":
                        plan1.AddScore(int.Parse(Console.ReadLine()));
                        break;
                    case "5":
                        plan1.SetScore(int.Parse(Console.ReadLine()), int.Parse(Console.ReadLine()));
                        break;
                    case "6":
                        Console.WriteLine(plan1.GetAverage());
                        break;
                    case "7":
                        Console.WriteLine(plan1.GetInfo());
                        break;
                    case "8":
                        isProgramActive = false;
                        break;
                    default:
                        break;
                }
            }
            while (isProgramActive) Menu();
        }
    }
}
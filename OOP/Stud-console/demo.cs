namespace ConsoleApp1
{
    class Demo
    {
        static void Main()
        {
            Stud stud1;
            Console.WriteLine("Введите имя студента:");
            stud1 = new Stud(Console.ReadLine());
            bool isProgramActive = true;
            void Menu()
            {
                Console.WriteLine("1.Вывести фамилию\n2.Изменить фамилию\n3.Вывести оценку\n4.Добавить оценку\n5.Изменить оценку\n6.Средний балл\n7.Показать всю информацию\n8.Выход");
                switch (Console.ReadLine())
                {
                    case "1":
                        Console.WriteLine(stud1.GetSurname());
                        break;
                    case "2":
                        stud1.SetSurname(Console.ReadLine());
                        break;
                    case "3":
                        Console.WriteLine(stud1.GetScore(int.Parse(Console.ReadLine())));
                        break;
                    case "4":
                        stud1.AddScore(int.Parse(Console.ReadLine()));
                        break;
                    case "5":
                        stud1.SetScore(int.Parse(Console.ReadLine()), int.Parse(Console.ReadLine()));
                        break;
                    case "6":
                        Console.WriteLine(stud1.GetAverage());
                        break;
                    case "7":
                        Console.WriteLine(stud1.GetInfo());
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
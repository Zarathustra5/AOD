using System;
class Hash
{
    const int m = 10;
    static arrElement[] arr = new arrElement[m];     //хеш таблица
    class arrElement     //элементы массива
    {
        string surname;
        listElement first = null;
        listElement last = null;
        public arrElement(string surname)
        {
            this.surname = surname;
        }
        public string getSurname()
        {
            return this.surname;
        }
        public void setSurname(string newSurname)
        {
            this.surname = newSurname;
        }
        public void setFirst(listElement newFirst)
        {
            this.first = newFirst;
        }
        public listElement getFirst()
        {
            return this.first;
        }
        public void setLast(listElement newLast)
        {
            this.last = newLast;
        }
        public listElement getLast()
        {
            return this.last;
        }
    }
    class listElement{     //элементы списков
        string surname;
        listElement next = null;
        public listElement(string surname)
        {
            this.surname = surname;
        }
        public string getSurname()
        {
            return this.surname;
        }
        public void setNext(listElement newNext)
        {
            this.next = newNext;
        }
        public listElement getNext()
        {
            return this.next;
        }
    }
    static void Main()
    {
        bool isProgramActive = true;
        while (isProgramActive) isProgramActive = Menu();
    }
    static bool Menu()     //меню
    {
        Console.WriteLine("\nВыберите действие:\n1.Добавить элемент\n2.Поиск элемента\n3.Вывод всех элементов\n4.Удаление элемента\n5.Выход");
        switch (Console.ReadLine())
        {
            case "1":
                Console.Write("\nВведите фамилию:");
                Add(Console.ReadLine());
                break;
            case "2":
                Console.Write("\nВведите фамилию:");
                Console.WriteLine("\n" + Search(Console.ReadLine()));
                break;
            case "3":
                Display();
                break;
            case "4":
                Console.Write("\nВведите фамилию:");
                Console.WriteLine("\n" + Delete(Console.ReadLine()));
                break;
            case "5":
                return false;
            default:
                break;
        }
        return true;
    }
    static void Add(string newSurname)     //добавление элемента
    {
        int sum = 0;
        foreach(char el in newSurname)
        {
            sum += el.GetHashCode();
        }
        sum %= m;
        if (arr[sum] == null)
        {
            arr[sum] = new arrElement(newSurname);
        }
        else
        {
            if (arr[sum].getFirst() == null)
            {
                arr[sum].setFirst(new listElement(newSurname));
                arr[sum].setLast(arr[sum].getFirst());
            }
            else
            {
                arr[sum].getLast().setNext(new listElement(newSurname));
                arr[sum].setLast(arr[sum].getLast().getNext());
            }
        }
    }
    static string Search(string surname)     //поиск элемента
    {
        int sum = 0;
        foreach (char el in surname)
        {
            sum += el.GetHashCode();
        }
        sum %= m;
        if (arr[sum] == null)
        {
            return "!Элемент не найден!";
        }
        else if (arr[sum].getSurname() == surname)
        {
            return "!Элемент найден!";
        }
        else
        {
            if (arr[sum].getFirst() == null)
            {
                return "!Элемент не найден!";
            }
            else
            {
                listElement temp = arr[sum].getFirst();
                while (temp != null)
                {
                    if (temp.getSurname() == surname) return "!Элемент найден!";
                    temp = temp.getNext();
                }
                return "!Элемент не найден!";
            }
        }
    }
    static void Display()     //вывод всех элементов
    {
        foreach (arrElement el in arr)
        {
            if (el != null)
            {
                Console.WriteLine(el.getSurname());
                if (el.getFirst != null)
                {
                    listElement temp = el.getFirst();
                    while (temp != null)
                    {
                        Console.WriteLine("\t-" + temp.getSurname());
                        temp = temp.getNext();
                    }
                }
            }
        }
    }
    static string Delete(string surname)     //удаление элемента
    {
        int sum = 0;
        foreach (char el in surname)
        {
            sum += el.GetHashCode();
        }
        sum %= m;
        if (arr[sum] == null)
        {
            return "!Элемент не найден!";
        }
        else if (arr[sum].getSurname() == surname)
        {
            if (arr[sum].getFirst() == null)
            {
                arr[sum] = null;
            }
            else
            {
                arr[sum].setSurname(arr[sum].getFirst().getSurname());
                if (arr[sum].getFirst() == arr[sum].getLast())
                {
                    arr[sum].setFirst(null);
                    arr[sum].setLast(null);
                }
                else
                {
                    arr[sum].setFirst(arr[sum].getFirst().getNext());
                } 
            }
            return "!Элемент удален!";
        }
        else
        {
            if (arr[sum].getFirst() == null)
            {
                return "!Элемент не найден!";
            }
            else if (arr[sum].getFirst().getSurname() == surname)
            {
                if (arr[sum].getFirst() == arr[sum].getLast())
                {
                    arr[sum].setFirst(null);
                    arr[sum].setLast(null);
                }
                else
                {
                    arr[sum].setFirst(arr[sum].getFirst().getNext());
                }
                return "!Элемент удален!";
            }
            else
            {
                listElement temp = arr[sum].getFirst();
                listElement prev = null;
                while (temp != null)
                {
                    if (temp.getSurname() == surname) 
                    {
                        if (arr[sum].getLast() == temp)
                        {
                            prev.setNext(null);
                            arr[sum].setLast(prev);
                        }
                        else
                        {
                            prev.setNext(temp.getNext());
                        }
                        return "!Элемент удален!";
                    }
                    prev = temp;
                    temp = temp.getNext();
                }
                return "!Элемент не найден!";
            }
        }
    }
}
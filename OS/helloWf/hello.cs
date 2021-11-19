using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Drawing;
using System.Windows.Forms;
 
public class HelloWorld : Form
{
  static public void Main (string[] args)
  {
    Application.Run (new HelloWorld ());
  }
  public HelloWorld ()
  {
    //Форма
    this.Size = new Size(700,500);
    this.ForeColor = Color.White;
    this.Text = "Dynamically Adding Controls";
    this.AutoSizeMode = AutoSizeMode.GrowAndShrink;
    this.AutoSize = true;
    this.Padding = new Padding(0,0,20,20);
    this.StartPosition = FormStartPosition.CenterScreen;
    //Надпись 
    Label label1 = new Label ();
    label1.Text = "Number of inputs";
    label1.Location = new Point(30, 20);
    Controls.Add (label1);
    //Поле ввода
    TextBox textBoxInput = new TextBox ();
    textBoxInput.Location = new Point(150, 20);
    Controls.Add (textBoxInput);
    //Кнопка
    Button buttonGenerate = new Button ();
    buttonGenerate.Location = new Point(270, 20);
    buttonGenerate.Text = "Generate";
    buttonGenerate.BackColor = Color.Black;
    buttonGenerate.Click += new EventHandler (buttonGenerate_Click);
    Controls.Add (buttonGenerate);
  }
  private List<TextBox>inputTextBoxes;
  private void buttonGenerate_Click (object sender, EventArgs e)
  {
    int inputNumber = Int32.Parse(textBoxInput.Text);
    inputTextBoxes = new List<TextBox>();
    for (int i = 1; i <= inputNumber; i++)
    {
      Label labelInput = new Label();
      TextBox textBoxNewInput = new TextBox();
      labelInput.Text = "Input " + i;
      labelInput.Location = new Point(30, textBoxInput.Bottom + (i * 30));  
      labelInput.AutoSize = true;    
      textBoxNewInput.Location = new Point(labelInput.Width ,          
      labelInput.Top - 3); // изменение свойств каждого поля ввода    
      inputTextBoxes.Add(textBoxNewInput); //добавление поля ввода в лист 
      this.Controls.Add(labelInput); //создание метки на форме 
      this.Controls.Add(textBoxNewInput);  //создание поля ввода на форме 
    }
    Button buttonAdd = new Button();//Создание кнопки  
    buttonAdd.Text = "Add"; //изменение свойства кнопки  
    buttonAdd.Location = new Point(this.Width / 2 - 
    buttonAdd.Width  /  2,  inputTextBoxes[inputTextBoxes.Count  - 1].Bottom + 20); //добавление кнопки в центре формы и под последним полем ввода  
    buttonAdd.Click += new EventHandler(buttonAdd_Click); 
    //Добавляем событие для созданной кнопки  
    this.Controls.Add(buttonAdd); //Добавляем кнопку на форму  
    this.CenterToScreen(); //Позиционируем форму в центр  
  }
  void buttonAdd_Click(object sender, EventArgs e) 
  {  
    int sum = 0;  
    foreach (TextBox inputBox in inputTextBoxes)  
    {  
      if (inputBox.Text == String.Empty)  
      {  
        MessageBox.Show("Please  fill  in  all  the  text boxes.",  
        "Error",MessageBoxButtons.OK, MessageBoxIcon.Error);  
        return;  
                                  
      }  
      else  
      {  
        sum += Int32.Parse(inputBox.Text); 
      }  
    } 
      MessageBox.Show("The Sum is " + sum);  
  } 
}


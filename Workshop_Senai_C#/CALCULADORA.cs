using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
        BACK:
            try
            {
                Console.Clear();

                Console.WriteLine("Informe o primeiro numero:");
                int N1 = int.Parse(Console.ReadLine());

                Console.WriteLine("Escolha uma operação abaixo: \n Adição (+) \n Subtração (-) \n Divisão (/) \n Multiplicação (x)");
                string OP = Console.ReadLine();

                Console.WriteLine("Informe o segundo numero:");
                int N2 = int.Parse(Console.ReadLine());

                int RESULT = 0;



                switch (OP)
                {
                    case "+":
                        RESULT = N1 + N2;
                        break;
                    case "-":
                        RESULT = N1 - N2;
                        break;
                    case "/":
                        RESULT = N1 / N2;
                        break;
                    case "x":
                        RESULT = N1 * N2;
                        break;
                }

                Console.WriteLine("{0} {1} {2} = {3}", N1, OP, N2, RESULT);
                Console.ReadKey();
            }
            catch (Exception Erro)
            {
                Console.WriteLine("Houve um erro! {0}", Erro);
                Console.ReadKey();
            }
            goto BACK;
        }
    }
}

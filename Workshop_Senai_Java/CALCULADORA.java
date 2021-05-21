package com.calculadora;
import java.util.Scanner;
public class calculadora 
{
    public static void main(String[] args) 
    {
     int main_question; 
     Scanner question = new Scanner(System.in);
     System.out.println("Selecione a tarefa: 1 = Calculadora, 2 = sair");
      main_question=question.nextInt();
        switch(main_question) 
        {
             case 1:
                int operacao;
                Scanner escolha = new Scanner(System.in);
                System.out.println("INSIRA O TIPO DE OPERAÇÃO:1-adição,2-subtração,3-multiplicação,4-divisão");
                operacao = escolha.nextInt();
                switch(operacao) 
                {
                    case 1:
                    int  a, b, soma;
                        Scanner numb = new Scanner(System.in);
                        System.out.println("Insira numeros da operação");
                        a = numb.nextInt();
                        b = numb.nextInt();
                        soma = a + b;
                        System.out.println("O resultado da operação é " + soma);

                    break;
                        case 2:
                        int a1, b1, subt;
                        Scanner numb1 = new Scanner(System.in);
                        System.out.println("Insira numeros da operação");
                        a1 = numb1.nextInt();
                        b1 = numb1.nextInt();
                        subt = a1 - b1;
                        System.out.println("O resultado da operação é " + subt);
                    break;
                    case 3:
                    int a2, b2, mult;
                        Scanner numb2 = new Scanner(System.in);
                        System.out.println("Insira numeros da operação");
                        a2 = numb2.nextInt();
                        b2 = numb2.nextInt();
                        mult = a2 * b2;
                        System.out.println("O resultado da operação é " + mult);
                    break;
                    case 4:
                    int a3, b3, divs;
                        Scanner numb3 = new Scanner(System.in);
                        System.out.println("Insira numeros da operação");
                        a3 = numb3.nextInt();
                        b3 = numb3.nextInt();
                        divs = a3 / b3;
                        System.out.println("O resultado da operação é " + divs);
                    break;
                    default:
                        throw new IllegalArgumentException();
                    
                }
            case 2:
            System.out.println("volte sempre!!");
            break;

        }
    
    }
}

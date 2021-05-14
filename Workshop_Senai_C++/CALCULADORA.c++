#include <iostream>
using namespace std;

int loop();

int main(){
    int op;
    float num1, num2;
    
    cout << "Olá, bem vindo a calculadora feita em C++!" << endl;
    
    cout << "Qual o primeiro número?" << endl;
    cin >> num1;

    cout << "Qual operador você irá usar? 1- Somar // 2- Subtrair // 3- Multiplicar // 4- Dividir" << endl;
    cin >> op;

    switch(op){
        case 1: //Soma
            cout << "Qual o segundo número?" << endl;
            cin >> num2;

            cout << "O resultado da soma é: " << num1 + num2 << endl<< endl;
            
        break;

	    case 2: //Subtração
            cout << "Qual o segundo número?" << endl;
            cin >> num2;

            cout << "O resultado da subtração é: " << num1 - num2 << endl;
            
	    break;
	    
	    case 3: //Multiplicação
            cout << "Qual o segundo número?" << endl;
            cin >> num2;

            cout << "O resultado da multiplicação é: " << num1 * num2 << endl<< endl;
            
        break;
        
        case 4: //Divisão
            cout << "Qual o segundo número?" << endl;
            cin >> num2;

            cout << "O resultado da divisão é: " << num1 / num2 << endl<< endl;
            
        break;
    }
    loop();
}

int loop(){
    int desejo;
    
    cout << "Você deseja: 1- Parar por aqui // 2- Fazer outro cálculo" << endl; //Reutilizar ou não
    cin >> desejo;
            
    switch(desejo){
        case 1:
		    cout << "Tudo bem, até mais!";
        break;
                
        case 2:
            main();
        break;
    }
    return desejo;
}
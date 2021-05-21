#include <iostream>
using namespace std;

int loop();

int main(){
    int OP;
    float N1, N2;
    
    cout << "Olá, bem vindo a calculadora feita em C++!" << endl;
    
    cout << "Qual o primeiro número?" << endl;
    cin >> N1;

    cout << "Qual operador você irá usar? 1- Somar // 2- Subtrair // 3- Multiplicar // 4- Dividir" << endl;
    cin >> OP;

    switch(OP){
        case 1: //Soma
            cout << "Qual o segundo número?" << endl;
            cin >> N2;

            cout << "O resultado da soma é: " << N1 + N2 << endl<< endl;
            
        break;

	    case 2: //Subtração
            cout << "Qual o segundo número?" << endl;
            cin >> N2;

            cout << "O resultado da subtração é: " << N1 - N2 << endl;
            
	    break;
	    
	    case 3: //Multiplicação
            cout << "Qual o segundo número?" << endl;
            cin >> N2;

            cout << "O resultado da multiplicação é: " << N1 * N2 << endl<< endl;
            
        break;
        
        case 4: //Divisão
            cout << "Qual o segundo número?" << endl;
            cin >> N2;

            cout << "O resultado da divisão é: " << N1 / N2 << endl<< endl;
            
        break;
    }
	
    loop();
	
}

int loop(){
    int DESEJO;
    
    cout << "Você deseja: 1- Parar por aqui // 2- Fazer outro cálculo" << endl; //Reutilizar ou não
    cin >> DESEJO;
            
    switch(DESEJO){
        case 1:
		    cout << "Tudo bem, até mais!";
        break;
                
        case 2:
            main();
        break;
    }
    return DESEJO;
}

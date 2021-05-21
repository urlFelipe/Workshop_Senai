def calculadora() :
    print("Bem vindo a calculadora em python!!")
    num1 = int(input("Digite um número: "))
    operacao = input('''
    Selecione um operador 
    + Somar 
    - Subtrair
    * Multiplicar 
    / Dividir 
    
    ''')
    if operacao == "+" :
        print('{}+?'.format(num1))
        num2 = int(input("Digite um número: "))
        res =(num1+num2)
        print('{}+{}={}'.format(num1,num2,res))
    if operacao == "-" :
        print('{}-?'.format(num1))
        num2 = int(input("Digite um número: "))
        res =(num1-num2)
        print('{}-{}={}'.format(num1,num2,res))
    if operacao == "*" :
        print('{}*?'.format(num1))
        num2 = int(input("Digite um número: "))
        res =(num1*num2)
        print('{}*{}={}'.format(num1,num2,res))
    if operacao == "/" :
        print('{}/?'.format(num1))
        num2 = int(input("Digite um número: "))
        res =(num1/num2)
        if num2 == 0 :
            print('{}/0=0'.format(num1))
        else :
            print('{}/{}={}'.format(num1,num2,res))
        
    reiniciar()


def reiniciar() :
    resetar = input('''
    Calcular novamente?
    1 - Para reiniciar 
    2 - para sair 
    
    ''')
    if resetar == "1" :
        calculadora()
    if resetar == "2" :
        print("Até mais...")
    if resetar != "1" and resetar != "2" :
        reiniciar()

calculadora()

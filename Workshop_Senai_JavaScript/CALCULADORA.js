function CALCULATOR() 
{
    
    function OPERATION(A,B,C) 
    {
        switch (C) 
        {
    
            case 1:

                alert(`${A} + ${B} = ${A + B}`)
                return A + B
    
            case 2:
                
                alert(`${A} - ${B} = ${A - B}`)
                return A - B
    
            case 3:

                alert(`${A} × ${B} = ${A * B}`)
                return A * B
    
            case 4:

                alert(`${A} ÷ ${B} = ${A / B}`)
                return A / B
    
            default:
    
                alert('OPERADOR INVÁLIDO!');
                CALCULATOR()
                break;
    
        }

    }

    function CONTINUE() 
    {

        var PROCEED = Number(prompt("(1)CONTINUAR \n(2)RESETAR \n(3)SAIR"))

        switch (PROCEED) 
        {
            case 1:

                N1 = RESULT
                var OPERATOR = Number(prompt("QUAL OPERAÇÃO DESEJA EFETUAR: \n(1)SOMA \n(2)SUBTRAÇÃO \n(3)MULTIPLICAÇÃO \n(4)DIVISÃO"))
                var N2 = Number(prompt("DIGITE O SEGUNDO NÚMERO:"))
                RESULT = OPERATION(N1,N2,OPERATOR)
                CONTINUE()
                break;
    
            case 2:

                CALCULATOR()
                break;
    
            case 3:

                alert("TUDO BEM, ATÉ MAIS!")
                break;
    
            default:

                break;
                
        }
        
    }

    var N1 = Number(prompt("DIGITE O PRIMEIRO NÚMERO:"))
    var OPERATOR = Number(prompt("QUAL OPERAÇÃO DESEJA EFETUAR: \n(1)SOMA \n(2)SUBTRAÇÃO \n(3)MULTIPLICAÇÃO \n(4)DIVISÃO"))
    var N2 = Number(prompt("DIGITE O SEGUNDO NÚMERO:"))
    var RESULT = OPERATION(N1,N2,OPERATOR)
    CONTINUE()

}
console.clear()
CALCULATOR()

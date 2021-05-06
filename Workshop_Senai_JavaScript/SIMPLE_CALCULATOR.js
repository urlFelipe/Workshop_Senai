function doOperation(OPERATOR, N1, N2)
{
    
    if (OPERATOR == "+")
    {
        return N1 + N2;
    } 
    
    else if (OPERATOR == "-")
    {
        return N1 - N2;
    } 
    
    else if (OPERATOR == "*")
    {
        return N1 * N2;
    }
    
    else if (OPERATOR == "/")
    {
        return N1 / N2;
    }
    
    else
    {
        throw new Error('Operação inválida');
    }

}

var N1 = null
var N2 = null
var HISTORY
var OPERATOR
var CONTINUE

do 
{

    if (N1 == null && N2 == null) 
    {

        N1 = Number(prompt("Digite um valor: \n \n 7   8   9\n 4   5   6\n 1   2   3\n      0"))

    }

    OPERATOR = prompt("Qual operacao deseja efetuar (+) (-) (*) (/)? : \n");
    N2 = Number(prompt("Digite outro valor: \n \n 7   8   9\n 4   5   6\n 1   2   3\n      0"))

    alert(`${N1} ${OPERATOR} ${N2} = ${doOperation(OPERATOR,N1,N2)}`)

    HISTORY = doOperation(OPERATOR,N1,N2)

        
    CONTINUE = Number(prompt(`(1) CONTINUAR (${HISTORY}) \n(2) RESET \n(3) SAIR`))

    switch (CONTINUE) 
    {

        case 1:
            N1 = HISTORY
            break;

        case 2:
            N1 = null
            N2 = null
            break;
        
        case 3:
            alert("Até mais!")
            break;

        default:
            alert("Opção Inválida!")
            break;

    }
    
}

while (CONTINUE != 3)

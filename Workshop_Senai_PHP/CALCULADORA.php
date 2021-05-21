<img class="fundo" src="Css/fundo.png" alt="fundo">
    <link rel="stylesheet" type="text/css" href="Css/calculadora.css" media="screen" />


<?php

    if($_POST["num1"]!= null && $_POST["num2"] != null){
        $num1=$_POST["num1"];
        
        $num2=$_POST["num2"];
        $opcao=$_POST["opcao"];

        switch ($opcao) {
            case "soma":
                $resultado = $num1 + $num2;
                echo "<div class='conta' ><h3>Para a expressão: $num1 + $num2</h3></div>";
                echo "<div class='result' ><h3>O resultado foi:</h3></div>";
                echo "<div class='res' ><h3>$resultado</h3></div>";
                echo "<div><a href='calculadora.html' class='btn btn-voltar'>Voltar</a></div> ";
                break;
            case "sub":
                $resultado = $num1 - $num2; 
                echo "<div class='conta' ><h3>Para a expressão: $num1 - $num2</h3></div>";
                echo "<div class='result' ><h3>O resultado foi:</h3></div>";
                echo "<div class='res' ><h3>$resultado</h3></div>";
                echo "<div><a href='calculadora.html' class='btn btn-voltar'>Voltar</a></div> ";
                break;
            case "multi":
                $resultado = $num1 * $num2;
                echo "<div class='conta' ><h3>Para a expressão: $num1 * $num2</h3></div>";
                echo "<div class='result' ><h3>O resultado foi:</h3></div>";
                echo "<div class='res' ><h3>$resultado</h3></div>";
                echo "<div><a href='calculadora.html' class='btn btn-voltar'>Voltar</a></div> ";
                break;
            case"divi":
                $resultado = $num1 / $num2;
                echo "<div class='conta' ><h3>Para a expressão: $num1 / $num2</h3></div>";
                echo "<div class='result' ><h3>O resultado foi:</h3></div>";
                echo "<div class='res' ><h3>$resultado</h3></div>";
                echo "<div><a href='calculadora.html' class='btn btn-voltar'>Voltar</a></div> ";
            break;
            default:
                echo "<div class='msg-opcao' ><h3>Escolha uma operação por favor</h3></div>";
                echo "<div><a href='calculadora.html' class='btn btn-voltar'>Voltar</a></div> ";
                break;
        }
    }else{
        echo "<div class='msg-campos' ><h3>Preencha todos os campos</h3></div>";
        echo "<div><a href='calculadora.html' class='btn btn-voltar'>Voltar</a></div> ";
    }
?>
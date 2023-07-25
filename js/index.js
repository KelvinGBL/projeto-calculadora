let res = document.getElementById("resultado");
let numeros = document.querySelectorAll(".number");
let operadores = document.querySelectorAll(".btn-operador");

let isClickOperator = false;

let btnLimpar = document.getElementById("btn-limpar");
let btnResultado = document.getElementById("btn-resultado");

let n1 = 0;
let n2 = 0;
let resultado = 0;
let operator = "";

function adicao(num1, num2){
    resultado = num1 + num2;
    return resultado;
}
function subtracao(num1, num2){
    resultado = num1 - num2;
    return resultado;
}
function multiplicacao(num1, num2){
    resultado = num1 * num2;
    return resultado;
}
function divisao(num1, num2){
    resultado = num1 / num2;
    return resultado;
}

function verificarOperador(num1, num2){
    if(operator == "+"){
        res.value = String(adicao(num1, num2));
        return true;
    }
    else if(operator == "-"){
        res.value = String(subtracao(num1, num2));
        return true;
    }
    else if(operator == "*"){
        res.value = String(multiplicacao(num1, num2));
        return true;
    }
    else if(operator == "/"){
        res.value = String(divisao(num1, num2));
        return true;
    }
    else{
        return false;
    }
}

for(let i = 0; i <= 9 ;i++){
    numeros[i].addEventListener('click', function(){
        res.value += String(numeros[i].innerHTML);

        if(isClickOperator == false){
            n1 = Number(res.value);
        }
        if(isClickOperator == true){
            n2 += String(numeros[i].innerHTML);
            n2 = Number(n2);
        }

    });
}

for(let i = 0; i <= 3 ;i++){
    operadores[i].addEventListener('click', function(){
        if(isClickOperator == false){
            res.value += String(operadores[i].innerHTML);
            operator = String(operadores[i].innerHTML);

            isClickOperator = true;
        }
    });
}

btnLimpar.addEventListener('click', function(){
    isClickOperator = false;
    n1 = 0;
    n2 = 0;
    operator = "";
    res.value = "";
})

btnResultado.addEventListener('click', function(){
    if(verificarOperador(n1, n2)){
        isClickOperator = false;
        n1 = resultado;
        n2 = 0;
    }
})

let calculadora = document.getElementById("calculadora");

function carregarCal(){
    calculadora.style.scale="1.0";
}

let res = document.getElementById("resultado");
let numeros = document.querySelectorAll(".btn-number");
let operadores = document.querySelectorAll(".btn-operador");

let btnLimpar = document.getElementById("btn-limpar");
let btnDeletar = document.getElementById("btn-deletar");
let btnResultado = document.getElementById("btn-resultado");

let operaAritimeticos = ["/", "*", "-", "+"];
let n1 = 0, n2 = 0;
let resultado = 0;
let operator = "";

let isClick = false;

let resArray = [];

function verificarOperador(num1, num2){
    switch(operator){
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        default:
            alert("Digite o proxímo número!");
    }
    n1 = ""; 
    n2 = "";
   
    resultado == 0 ? res.value = "" : res.value = String(resultado);
}


for(let i1 = 0; i1 <= 9 ;i1++){
    numeros[i1].addEventListener('click', function(){
        res.value += numeros[i1].innerHTML;
        resArray.push(numeros[i1].innerHTML);
    });
}

for(let i2 = 0; i2 <= 3 ;i2++){
    operadores[i2].addEventListener('click', function(){
        if(isClick == false && res.value != ""){
            res.value += operaAritimeticos[i2];
            resArray.push(operaAritimeticos[i2]);
            operator = operaAritimeticos[i2];
            isClick = true;
        }
    });
}

btnLimpar.addEventListener('click', function(){
    n1 = 0, n2 = 0;
    operator = "";
    res.value = "";
    resArray = [];
    isClick = false;
})

btnDeletar.addEventListener('click', function(){
    res.value = res.value.slice(0, res.value.length - 1);
    resArray.pop();
    if(res.value.indexOf(operator) == -1){
        isClick = false;
        operator = "";
    }
})

btnResultado.addEventListener('click', function(){

    if(res.value != "" && isClick == true){
        for(let i = 0; i < resArray.lastIndexOf(operator); i++){
            n1+= resArray[i];
        }
        for(let i = resArray.lastIndexOf(operator) + 1; i < resArray.length; i++){
            n2+= resArray[i];
        }
        
        n1 = Number(n1);
        n2 = Number(n2);
        
        verificarOperador(n1, n2)
        resArray = [];
        operator = "";
        
        for(let i = 0; i < String(resultado).length ;i++){
            resArray.push(String(resultado).charAt(i))
        }
        isClick = false;
    }
})

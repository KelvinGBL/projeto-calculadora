
let calculadora = document.getElementById("calculadora");

function carregarCal(){
    calculadora.style.scale="1.0";
}

let res = document.getElementById("resultado");

let btnLimpar = document.getElementById("btn-limpar");
let btnDeletar = document.getElementById("btn-deletar");
let btnResultado = document.getElementById("btn-resultado");

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
    n1 = ""; n2 = "";
    resultado == 0 ? res.value = "" : res.value = String(resultado);
}

function addNumber(n){
    res.value += n;
    resArray.push(n);
}

function addOperator(o){
    if(isClick == false && res.value != ""){
        res.value += o;
        resArray.push(o);
        operator = o;
        isClick = true;
    }
}

btnLimpar.addEventListener('click', function(){
    n1 = 0; n2 = 0;
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
        
        n1 = Number(n1); n2 = Number(n2);
        
        verificarOperador(n1, n2)
        resArray = [];
        operator = "";
        
        for(let i = 0; i < String(resultado).length ;i++){
            resArray.push(String(resultado).charAt(i))
        }
        isClick = false;
    }
})

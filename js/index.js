
function carregarCal() {
    document.getElementById("calculadora").style.scale = "1.0";
}

let resultado = document.getElementById("resultado");

function fazerOperacao(num1, num2, operator){
    let res = 0;
    switch (operator){
        case "+":
            res = num1 + num2;
            break;
        case "-":
            res = num1 - num2;
            break;
        case "*":
            res = num1 * num2;
            break;
        case "/":
            if(num1 == 0 || num2 == 0){
                alert("Não é possível dividir por zero.")
                res = "";
            }else{
                res = num1 / num2;
            }
            break;
    }
    return String(res);
}

var n1 = "", n2 = "";
let operator = "";

function addNumber(num){
    resultado.value += num;

    if(operator == ""){
        n1 += num;
    }else{
        n2 += num;
    }
}
function addOperator(op){
    if(!'+-*/'.includes(resultado.value.slice(-1)) && operator == ""){
        resultado.value += op;
        operator = op;
    }
}

let btnLimpar = document.getElementById("btn-limpar");
btnLimpar.addEventListener('click',()=>{
    n1 = "";
    n2 = "";
    operator = "";
    resultado.value = "";
});

let btnDeletar = document.getElementById("btn-deletar");
btnDeletar.addEventListener('click',()=>{
    if(n2 == "" && operator == "") {
        resultado.value = resultado.value.slice(0,-1);
        n1 = n1.slice(0,-1);
    }
    if('+-*/'.includes(resultado.value.slice(-1))) {
        resultado.value = resultado.value.slice(0,-1);
        operator = "";
    }
    if(n1 != "" && operator != "") {
        resultado.value = resultado.value.slice(0,-1);
        n2 = n2.slice(0,-1);
    }
});

let btnResultado = document.getElementById("btn-resultado");
btnResultado.addEventListener('click',()=>{
    if(!'+-*/'.includes(resultado.value.slice(-1))){
        resultado.value = fazerOperacao(Number(n1), Number(n2), operator);
        n1 = resultado.value;
        n2 = "";
        operator = "";
    }
})
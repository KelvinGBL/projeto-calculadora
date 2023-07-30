let calculadora: any = document.getElementById("calculadora");

function carregarCal(): void{
    calculadora.style.scale="1.0";
}

let res: any = document.getElementById("resultado");
// Buttons
let btnLimpar: any = document.getElementById("btn-limpar");
let btnDeletar: any = document.getElementById("btn-deletar");
let btnResultado: any = document.getElementById("btn-resultado");

// Variáveis Globais
let n1: string = ""; 
let n2: string = "";
let resultado: number = 0;
let operator: string = "";
let isClick: boolean = false;
let resArray: string[] = [];

function verificarOperador(num1: number, num2: number): void{
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

function addNumber(n: string): void{
    res.value += n;
    resArray.push(n);
}

function addOperator(o: string): void{
    if(isClick == false && res.value != ""){
        res.value += o;
        resArray.push(o);
        operator = o;
        isClick = true;
    }
}

btnLimpar.addEventListener('click', function(){
    n1 = ""; 
    n2 = "";
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
        for(let i: number = 0; i < resArray.lastIndexOf(operator); i++){
            n1+= resArray[i];
        }
        for(let i: number = resArray.lastIndexOf(operator) + 1; i < resArray.length; i++){
            n2+= resArray[i];
        }
        
        verificarOperador(Number(n1), Number(n2))
        resArray = [];
        operator = "";
        
        for(let i: number = 0; i < String(resultado).length ;i++){
            resArray.push(String(resultado).charAt(i))
        }
        isClick = false;
    }
})
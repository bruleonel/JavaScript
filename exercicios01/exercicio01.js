/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

function calcular(num1, num2){
    console.log("A soma de " + num1 + " e " + num2 + " é: " + (num1+num2))
    console.log("A subtração de " + num1 + " e " + num2 + " é: " + (num1-num2))
    console.log("A multiplicação de " + num1 + " e " + num2 + " é: " + (num1*num2))
    console.log("A divisão de " + num1 + " e " + num2 + " é: " + (num1/num2))
}

calcular(8,2)
/* 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/

function calculadora (numero1, numero2, operador) {
    switch (operador) {
        case '+':
            const soma = numero1 + numero2
            return soma
        case '-':
            const subtracao = numero1 - numero2
            return subtracao
        case '*':
            const multiplicacao = numero1 * numero2
            return multiplicacao
        case '/':
            const divisao = numero1 / numero2
            return divisao
        default:
            'Operação inválida!'
    }
}

console.log(calculadora(10, 4, '+'))
console.log(calculadora(10, 4, '-'))
console.log(calculadora(10, 4, '*'))
console.log(calculadora(10, 4, '/'))
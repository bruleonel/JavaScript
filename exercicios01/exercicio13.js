/* 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

function exibirDiaUtil (dia) {
    switch ( dia ) {
        case 1:
            return 'Não é dia útil'
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'DIA ÚTIL!'
        case 7:
            return 'Não é dia útil'
        default:
            'Dia inválido!'
    }
}

console.log(exibirDiaUtil(1));
console.log(exibirDiaUtil(2));
console.log(exibirDiaUtil(3));
console.log(exibirDiaUtil(4));
console.log(exibirDiaUtil(5));
console.log(exibirDiaUtil(6));
console.log(exibirDiaUtil(7));
console.log(exibirDiaUtil('a'));
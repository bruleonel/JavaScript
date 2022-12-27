/* 11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false. */

function calcularBissexto (ano) {
    if( ano % 400 == 0) {
        return 'Ano bissexto1'
    } else if ( ano % 100 == 0 ) {
        return 'Não é ano bissexto 1'
    } else if ( ano % 4 == 0 ) {
        return 'Ano bissexto 2'
    } else {
        return 'Não é ano bissexto 2'
    }
}

console.log(calcularBissexto(2022))
console.log(calcularBissexto(2024))
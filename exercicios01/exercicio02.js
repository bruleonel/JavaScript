/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

function classificarTringulos(lado01, lado02, lado03){
    if( lado01 == lado02  && lado01 == lado03)
        console.log('Triângulo Equilátero')

    else if(lado01 == lado02 || lado01 == lado03 || lado02 == lado03)
        console.log("Triângulo Isósceles")

    else
        console.log('Triângulo Escaleno')
}

classificarTringulos(2,2,2)
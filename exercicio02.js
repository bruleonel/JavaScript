function classificarTringulos(lado01, lado02, lado03){
    if( lado01 == lado02  && lado01 == lado03)
        console.log('Triângulo Equilátero')

    else if(lado01 == lado02 || lado01 == lado03 || lado02 == lado03)
        console.log("Triângulo Isósceles")

    else
        console.log('Triângulo Escaleno')
}

classificarTringulos(2,2,2)
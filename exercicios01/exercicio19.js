/*19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

function registrarPedido (numero, quantidade) {
    let total = 0;
    switch (numero) {
        case 100:
            total = quantidade * 3,00
            console.log('Seu pedido de ' + quantidade + ' Cachorro(s) Quente(s) foi registrado!')
            console.log('Valor à pagar: R$' + total)
            break
        case 200:
            total = quantidade * 4,00
            console.log('Seu pedido de ' + quantidade + ' Hambúrguer(es) Simples foi registrado!')
            console.log('Valor à pagar: R$' + total)
            break 
        case 300:
            total = quantidade * 5,50
            console.log('Seu pedido de ' + quantidade + ' Cheeseburguer(es) foi registrado!')
            console.log('Valor à pagar: R$' + total)
            break
        case 400:
            total = quantidade * 7,50
            console.log('Seu pedido de ' + quantidade + ' Bauru(s) foi registrado!')
            console.log('Valor à pagar: R$' + total)
            break
        case 500:
            total = quantidade * 3,50
            console.log('Seu pedido de ' + quantidade + ' Refrigerante(s) foi registrado!')
            console.log('Valor à pagar: R$' + total)
            break
        case 600:
            total = quantidade * 2,80
            console.log('Seu pedido de ' + quantidade + ' Suco(s) foi registrado!')
            console.log('Valor à pagar: R$' + total)
            break
        default:
            console.log('N° do peido inválido!')   
    }
}

registrarPedido(100, 3)
registrarPedido(600, 3)
registrarPedido(400, 2)
registrarPedido(500, 2)
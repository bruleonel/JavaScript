const sequencia = {
    _valor: 1, //Por convenção coloca-se (_) em variáveis privadas
    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

//Pra acessar chama-se o metodo como atributo
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
//Para valores menores do que já foi atribuido, serão ignorados
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
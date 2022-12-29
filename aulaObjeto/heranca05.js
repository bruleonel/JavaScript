console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.primeiro = function() {
    return this[0]
}

console.log([1, 2, 3, 4].primeiro())

//Cuidado!
String.prototype.toString = function () {
    return 'Lascou tudo!'
}

console.log('Escola'.reverse())
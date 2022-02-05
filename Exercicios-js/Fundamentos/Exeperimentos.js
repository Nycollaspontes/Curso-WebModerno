let a = 3

global.b = 123
this.c = 456
this.d = false
this.e ='Teste '

console.log(a)
console.log(globalThis.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === window)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variavel da forma errada sem let e sem var 
abc =3
console.log(global.abc)

//module.exports = {e:456 , f:false , g : 'Teste'}

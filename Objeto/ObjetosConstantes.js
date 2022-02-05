//pessoa -> 123 -> {....}
const pessoa = {nome : ' Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

/*pessoa -> 456 -> {....}
pessoa = {nome : 'ana' }*/


Object.freeze(pessoa)

pessoa.nome = 'maria '
pessoa.end = 'Rua Abc'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome : 'ana'})
pessoaConstante.nome ='pedro'
console.log(pessoaConstante)
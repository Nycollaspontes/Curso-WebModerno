let valor // nao inicialiazada
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.ToString())// Erro de tipo
const produto = {}
console.log(produto.preco)
console.log(produto)



produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined deixa que a linguagem trate isso
console.log(!!produto.preco)
//delete produto.preco se quiser tirar um atributo de um objeto use o delete 
console.log(produto)
produto.preco = null //sem preço 

console.log(!! produto.preco)

console.log(produto)
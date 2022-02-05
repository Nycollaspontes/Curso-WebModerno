const carrinho = [ '{"nome " : "Borracha" , "preco" : 3.45 }',
                   '{"nome" : "Lapis" , "preco" : 1.50  }', 
                   '{"nome" : "Caderno" , "preco" : 13.90 }',
                   '{"nome" : "Kit de Lapis" ,  "preco" : 41.22}' ,
                   '{"nome ": "Caneta" , "preco" : 7.50}'



] 
//console.log(carrinho)
/* retornar um array apenas com os  precos usando o map 


let resultado = carrinho.map(e => JSON.parse(e).preco,{


})
console.log(resultado)

Meu metodo de fazer */
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado =carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
console.log(typeof paraObjeto)
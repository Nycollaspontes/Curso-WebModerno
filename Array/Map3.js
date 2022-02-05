/*Array.prototype.map2 = function(callback){
    return callback = [this]
 
     }*/
    

Array.prototype.map2 = function(callback){
    const newArray  =[]
    for (let i =0 ; i< this.length ; i ++){
        newArray = this 
    
    }
}
 

const carrinho = [ '{"nome " : "Borracha" , "preco" : 3.45 }',
                   '{"nome" : "Lapis" , "preco" : 1.50  }', 
                   '{"nome" : "Caderno" , "preco" : 13.90 }',
                   '{"nome" : "Kit de Lapis" ,  "preco" : 41.22}' ,
                   '{"nome ": "Caneta" , "preco" : 7.50}'



] 
const paraObjeto =  json =>  JSON.parse(json)
const apenasPreco =  produto =>   produto.preco

const resultado  =  carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

const produtos = [
    {nome : 'Notebook ' , preco :2499 , fragil : true},
    {nome : 'Ipad Pro', preco : 4199, fragil : true},
    {nome :' Copo de vidro', preco :12.49, fragil : true},
    {nome : 'Copo de Plastico', preco : 18.99 , fragil : false }

]

/*console.log(produtos.filter(function (p){
    return  p.preco> 2000 && p.fragil == true 
}))*/

/*const ProdutoCaro = function(p){
    resultado = produtos.preco
    if (resultado > 2000){

        return resultado
    }
}

const RealFragil = function(p){
    resultado = produtos.fragil
   
      return resultado
    
}*/
const caro =  produto => produto.preco >=500
const fragil =  produto => produto.fragil 

console.log(produtos.filter(caro).filter(fragil))




 


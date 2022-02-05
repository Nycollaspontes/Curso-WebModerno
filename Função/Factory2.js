/*factory simples 
function criarPessoa(nome , sobrenome){
    return {
        nome :nome ,
        sobrenome :sobrenome 
    }
}
console.log(criarPessoa('bruna' , 'campos'))
console.log(criarPessoa('Arthur' , 'Borges'))
*/

function criarProduto(nome, preco){

    return {
        nome:nome ,
        preco :preco,
        desconto : 0.1,
        
    }

}

console.log(criarProduto('Escova de dentes' , 50))
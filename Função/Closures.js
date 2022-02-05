//Closure é o escopo criado quando uma função é declarada 
//esse escopo permite  a função acessar e manipular variveis externas a funçao 

//contexto lexico em açao!

const x ='Global'

function fora(){

    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro 
}
const minhaFuncao = fora()
console.log(minhaFuncao())
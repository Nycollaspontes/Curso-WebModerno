const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
//Foram criadas antes da requisicao do json os filtros que eu queria em forma de funcao arrow 
//funcao arrow= nome + parametros + retorno implicito 

const chineses = f => f.pais === "China"
const mulher = f => f.genero === "F"
const menorSalario = (func , funcAtual ) => {
    return func.salario > funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data 
       
    //mulher chinesa com o menor salario 

    const func = funcionarios
    .filter(chineses)
    .filter(mulher)
    .reduce(menorSalario)
    console.log(func )

})








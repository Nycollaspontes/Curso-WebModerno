//criar uma funcao que vai retornar as vezes um erro e as vezes um numero 
function funcionarOuNao(valor ,chancedeErro){
    return new Promise((resolve , reject) => {

        if(Math.random() > chancedeErro){

            reject('Ocorreu um Erro')
        }

        else{
            resolve(valor)
        }


    })

}


funcionarOuNao('Testando ...' , 1)
.then(console.log)


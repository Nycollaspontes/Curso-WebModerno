function tratarErroeLancar(erro){
    throw new Error('Nos desculpe nossa equipe de suporte ja esta trabalhando para tratar esse erro')
}
function ImprimirNomeGritado(obj){
    try {
        console.log(obj.name.ToUpperCase()+ '!!!')

    }   catch (e) {
        tratarErroeLancar(e)

    }   finally{
       console.log('final')
    }
}
const obj = { name : 'Roberto'}
ImprimirNomeGritado(obj)

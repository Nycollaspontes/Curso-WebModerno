const valor = 'Global '
//Vai ser escrito global pois a funçao minhaFuncao foi definida fora do contexto lexico da funcao exec ela vai pegar a variavel que esta em escopo global

function minhaFuncao(){
    console.log(valor)
}
minhaFuncao()

function exec(){

    const valor = 'Local'
    minhaFuncao()
}

exec()
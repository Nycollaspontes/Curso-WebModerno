const alunos = [
    {nome  :'Joao' , nota :7.3  ,  bolsista : false},
    {nome  :'Maria' , nota :9.2 ,  bolsista :true },
    {nome  :'Pedro' , nota :9.8 ,  bolsista :false },
    {nome  :'Ana' , nota :8.7 ,  bolsista :true },
]

//Desafio 1 : Todos os alunos  Sao  bolsistas?
//Desafio 2 : Algum aluno e bolsista?
/*let Saotodosverdadeiros = alunos.map(a => a.bolsista).reduce(function(acumulado,atual){
    if(acumulado && atual){
        return  true 
    }
    else  {
        return false 

    }
})
console.log(Saotodosverdadeiros)

let resultado2 = alunos.map ( a => a.bolsista).reduce(function(acumulado,atual){

if (acumulado || atual ){
    return true 
}
else {
    return false 
}


})
console.log(`O Desafio 1 é ${Saotodosverdadeiros} , O Desafio 2 e ${resultado2}   `)*/

const todosBolsistas = (resultado,bolsista) => resultado && bolsista /* aplica a condicao na mesma linha a condicao  de os dois atributos do array  
serem iguais sintaxe : declaracao da funcao , Parametros , funcao arrow com retorno implicito , Condicao , Resultado em booleano */ 
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))
const algumBolsista = (resultado ,bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))//Uso do reduce Estou usando dentro do reduce a funcao 
//criada por mim para retornar verdadeiro se uma das duas condicoes forem aceitas.


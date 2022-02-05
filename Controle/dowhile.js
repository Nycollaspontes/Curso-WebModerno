function getInteiroAleatorio(min , max){
 const valor = Math.random() *(max- min) + min
 return Math.floor(valor)
}
let opcao = 0
do  {
    opcao = getInteiroAleatorio(-1,10)
    console.log('Opção Escolhida Foi ' +opcao)
}
    while(opcao != -1) // a condiçao fica apos o bloco 
console.log('Ate a Proxima!')
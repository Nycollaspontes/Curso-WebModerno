//Funçao sem retorno mais na propria funçao ela printa na tela os numeros passados por parametro 
function imprimirSoma(a , b ){

    console.log( a + b)
}
imprimirSoma( 2, 3)
imprimirSoma( 2)
imprimirSoma( 2, 10,4,5,6)
imprimirSoma( )
// Funçao com retorno que o segundo valor (b) foi atribuido o valor de 1 ja mais caso eu passe outro valor para (b) ele tabem aceitara
function soma(a  , b = 1  ){
return a + b

}
console.log(soma (2,3))
console.log(soma(2 ))
console.log(soma( ))




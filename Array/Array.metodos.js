const pilotos = ['Vettel ', 'Alonso', 'Raikonnen', 'Massa']
console.log(pilotos) // Metodo pop remove o ultimo elemento de um array!
pilotos.pop()
console.log(pilotos)

pilotos.shift() // Metodo shift remove o primeiro elemento de  um array
console.log(pilotos)

pilotos.unshift('Hamilton')//Adiciona um elemento na primeira posicao de um array
console.log(pilotos)

pilotos.unshift('Vettel')// ^^^^^^^^
console.log(pilotos)


pilotos.push('Verstapenn')//Metodo push adiciona um elemento no ultimo array(otimo para ser usado) !
console.log(pilotos)


pilotos.splice(2 , 0 ,'Bottas' , 'Massa')/*Metodo splice sendo usado para adicionar 2 elementos sem excluir
nada neles e so adicionando mais 2 pilotos (NA INDICE 2, 0 = INDICA QUE NAO SERA EXCLUIDO NENHUM ELEMENTO , Depois 
    e adicionado...) */
console.log(pilotos)


pilotos.splice(3 ,1 )// No index 3 ele ira remover o seu respectivo inquilino de posicao.(MASSA)
console.log(pilotos)







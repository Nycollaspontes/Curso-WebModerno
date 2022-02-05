const valores = [ 7.7 , 8.9 , 6.3 , 9.2]
console.log(valores[0] ,valores [3]) 
console.log(valores[4]) // em java daria erro pois nao existe o indice 

valores[5] = 10
console.log(valores[5])
console.log(valores.length)

valores.push('Nycollas')
console.log(valores[6])


valores.push({id :3 } ,false,null,'teste')
console.log(valores)
console.log(valores.length)

console.log(valores.pop)
delete valores [0]


console.log(valores)
console.log(typeof valores) 
valores[0]= 'Carlinhos'
console.log(valores)

valores[4] = 15
console.log(valores)
// operador  ... rest(juntar)/spread(espalhar )
//usar rest com parametro de funcao 

//usar spread no objeto 
const funcionario = {
    nome :'maria',
    salario : 12399.00

}
const clone  = {ativo: true , ...funcionario}
console.log(clone)


//usar spread em um array

const grupoa = ['ana','joao' , 'Marcelo , Livia']
const grupoFinal = ['Rafaela ' , ...grupoa , ' Juan ']
console.log(grupoFinal)
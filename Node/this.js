console.log(this === global)
console.log(this === module)


console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('O que for impresso estara dentro da funcao ')
    console.log(this === exports)

    console.log(this === global)//O this dentro de uma funcao sempre aponta para global 
}

logThis()
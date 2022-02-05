function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma 
}
console.log(soma(1,10,25))
console.log(soma())
console.log(soma (10,15,20,30,40))
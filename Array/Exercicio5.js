function  maiorouIgual(primeiro, segundo){
    if(typeof primeiro != typeof segundo)return  false 

    return primeiro > segundo
}
console.log(maiorouIgual(0,"0"))
console.log(maiorouIgual(5,1))
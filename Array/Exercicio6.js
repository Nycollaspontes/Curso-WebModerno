/*function inverso(valor){
 const tipo = typeof valor

 if (tipo == "Boolean") return !valor
 else if (tipo == "Number") return -valor
 else{
     return `Booleano ou Numeros Esperados , mas o parametro e do tipo ${tipo}`
 }
 
}
inverso(3)*/

function inverso (valor ){
    const tipo = typeof valor 
    if (tipo == Boolean) return !valor 

 if (tipo == Number) return -valor 
else return `booleano ou numeros esperados , mas o parametro e do tipo ${tipo}`
}

inverso(true)
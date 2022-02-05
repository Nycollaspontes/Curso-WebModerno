//O then sempre recebe apenas um parametro 



function primeiroElemento(array){
    return array[0]
}

function primeiraLetra(String){
    return String [0]
}

const letraMinuscula = letra => letra.toLowerCase()



 new Promise(function(resolve) {
    resolve(['Ana', 'bia ' , 'carlos ' , 'felipe ' , 'nycollas'])


})


    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)    
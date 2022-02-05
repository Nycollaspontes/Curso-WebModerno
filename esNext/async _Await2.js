function gerarNumeros(min , max ,numerosProibidos){
    //Logica para inverter um min e um maximo 
    if (min > max){
        
        [max , min ] = [min , max]
    }


return new Promise(resolve => {
    if (min || max )
    const  fator = max - min + 1
    const aleatorio = parseInt(Math.random() * fator ) + min 
    resolve(aleatorio)
})
}


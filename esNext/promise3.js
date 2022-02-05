function gerarNumeros(min , max){
    //Logica para inverter um min e um maximo 
    if (min > max){
        
        [max , min ] = [min , max]
    }


return new Promise(resolve => {
    const  fator = max - min + 1
    const aleatorio = parseInt(Math.random() * fator ) + min 
    resolve(aleatorio)
})
}
gerarNumeros(1,5)
.then(num => num * 10)
.then(numX10 => `Esse e o numero aleatorio gerado mutiplicado por 10 vezes ${numX10}`)
.then(console.log)

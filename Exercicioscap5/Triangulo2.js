/*function triangulo(lado1, lado2, lado3){
    if(lado1 ===lado2 && lado1 === lado3){
        return equilatero = console.log('Esse é um triangulo equilatero.')
    }
    if(lado1 === lado2 && lado1 !== lado3){
        return isoceles = console.log('Esse é um triangulo isoceles')
    }
    if(lado1 !== lado2 && lado1 === lado3){
        return isoceles = console.log('Esse é um triangulo isoceles')
    }
    if (lado1 !== lado2 && lado1 !== lado3){
        return escaleno = console.log('Esse é um triangulo escaleno')
    }
    if(lado2 === lado1 && lado2 === lado3){
        return equilatero = console.log('Esse é um triangulo equilatero')
    }
    if (lado2 === lado1 && lado2 !== lado3){
        return isoceles = console.log('Esse é um triangulo isoceles')
    }
    if (lado2 !== lado1 && lado2 === lado3){
        return isoceles = console.log('Esse é um triangulo isoceles')
    }
    if (lado2 !== lado1 && lado2 !== lado3){
        return escaleno = console.log('Esse é um triangulo escaleno')
    }
    if(lado3 === lado1 && lado3 === lado2){
        return equilatero = console.log('Esse é um triangulo equilatero')
    }
    if (lado3 === lado1 && lado3 !== lado2){
        return isoceles = console.log('Esse é um triangulo isoceles')
    
    }
    if (lado3 !== lado1 && lado3 === lado2){
        return isoceles = console.log('Esse é um triangulo isoceles')
    }
    if (lado3 !== lado1 && lado2 !== lado3){
        return escaleno = console.log('Esse é um triangulo escaleno')
    }


}*/ function triangulo(lado1,lado2,lado3){
    if (lado1 === lado2 ===  lado3 ){
        return console.log('Esse é um triangulo equilatero')
    }
    if(lado1 !== lado2  !== lado3){
        return console.log('Esse é um triangulo escaleno')

    }
    if (lado1 !== lado2 || lado1 !== lado3){
        return console.log('Esse é um triangulo isoceles')
    }
    if (lado2 !== lado1 || lado2 !== lado3){
        return console.log('Esse é um triangulo isoceles ')
    }
    if (lado3 !== lado1 || lado3 !== lado2){
        return console.log('Esse é um triangulo isoceles')
    }
}
triangulo(10, 20 ,10)
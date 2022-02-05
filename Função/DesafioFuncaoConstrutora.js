/*class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa ('João ')
p1.falar()*/

/* Minha tentativa 
 function Pessoa(nome){
     this.nome = nome 
 }

 function falar(nome){
     console.log(`meu nome é ${nome}`)
 }

 const p1 = new Pessoa('Carletuti')
falar(p1)
{
    deveria ter feito a funçao falar com o this dentro do escopo da funçao construtora .
}
*/ 

function Pessoa(nome){
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new Pessoa('Carlota')
p1.falar() // chamei o objeto e depois a função .


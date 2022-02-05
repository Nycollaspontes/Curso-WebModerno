class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome

    }
}
 
class Pai extends Avo{
    constructor(sobrenome,profissao = 'Professor'){
    super(sobrenome)
    this.profissao = profissao
    
}
}

class Filho extends Pai{
    constructor(){
        super(' Silva ')
    }
    
    
} 

const filho = new Filho
console.log(filho)


const vovo  = new Avo('Oliveira')
console.log(vovo)
 
const pai = new Pai
console.log(pai)
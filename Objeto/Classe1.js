class Lancamento{
    constructor(nome = 'Generico ', valor = 0){
    this.nome = nome 
    this.valor = valor 
    }
}

class CicloFinanceiro{
    constructor(mes , ano ){
        this.mes = mes 
        this.ano = ano 
        this.lancamentos = []
    }


    addLancamentos(...lancamentos){
    lancamentos.forEach(l => this.lancamentos.push(l))}


    sumario(){
        let ValorConsolidado = 0
        this.lancamentos.forEach(l =>{
        ValorConsolidado += l.valor 
        }) 
        return  ValorConsolidado
    }


   
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('luz ', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario , contaDeLuz)
console.log(contas.sumario())

const faturaCartao = new Lancamento('Fatura Cartao', -860 )
contas.addLancamentos(faturaCartao)
console.log(contas.sumario())




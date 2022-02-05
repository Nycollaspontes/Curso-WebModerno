const Ano = [

    {mes : 'Janeiro ', Id : 1},
    {Mes : 'Fevereiro ', Id : 2},
    {Mes : 'Marco ', Id : 3},
    {Mes : 'Abril ', Id : 4},
    {Mes : 'Maio ', Id : 5},
    {Mes : 'Junho ', Id : 6},
    {Mes : 'Julho ', Id : 7},
    {Mes : 'Agosto ', Id : 8},
    {Mes : 'Setembro ', Id : 9},
    {Mes : 'Outubro ', Id : 10},
    {Mes : 'Novembro ', Id : 11},
    {Mes : 'Dezembro ', Id : 12},
]

const nomedomes = function(ano){
    if (ano == 1 ){
        console.log('Janeiro')
    }
    if(ano == 2){
        console.log('Fevereiro')
    }
    if (ano == 3){
        console.log('Marco')
    }
    if(ano ==4){
        console.log('Maio')
    }

    
    if(ano ==5){
        console.log('junho')
    }

    
    if(ano ==6){
        console.log('Julho')
    }
    
    if(ano ==7){
        console.log('Agosto')
    }
    
    if(ano ==8){
        console.log('Setembro')
    }
    

    if (ano == 9){
        console.log('Novembro')
    }
 }


 nomedomes(1)
nomedomes(3)

function receberNomeDoMes(numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return console.log(mapeamento[--numero]);
    }
receberNomeDoMes(1)
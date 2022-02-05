for ( let letra  of  'Cod3r'){
    console.log(letra)
}


const assuntosecma = [ 'Map' ,'Set' ,'Promise' ]



for(let[i] of assuntosecma){
    console.log(i)
}



for(let assunto of assuntosecma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map' , {abordado : true }],
    ['Set', {abordado : true }],
    ['Promise' , {abordado : false }]
])

for (let assunto of assuntosMap){
    console.log(assunto)
}

for(chave of assuntosMap.keys()){
    console.log(chave)
}

for(valores of assuntosMap.values()){
    console.log(valores)
}


for(let [ch ,vl] of assuntosMap.entries()){
    console.log(ch ,vl )
}

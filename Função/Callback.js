const fabricantes = ['Mercedes', 'BMW ','audi ']
function imprimir(nome,indice){
    console.log(`${indice +1}. ${nome} `)

}
fabricantes.forEach(imprimir)
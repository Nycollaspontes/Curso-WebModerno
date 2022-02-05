const fs = require('fs')


//sincrono...

const caminho = __dirname + '/arquivo.json' //dirname se refere ao direotirio atual  + 'Nome do arquivo'  

const conteudo = fs.readFileSync(caminho, 'UTF-8') //crio uma constante conteudo 
// recebendo o fs da blibioteca invoco ele passando o metodo readfilesync pois o arquivo lido vai ser um arquivo para rodar sincrono , apos isso como metodo da funcao reafile 
// eu passo a constante conteudo que tem o endereco do meu arquivo + o encoder
console.log(conteudo)

//assincrono 


fs.readFile(caminho ,'UTF-8' , (err , conteudo) =>    {

    //const config = JSON.parse(conteudo)  
    //console.log(`${config.db.host}: ${config.db.port}`)
})


const config = require('./arquivo.json')
console.log(config.db)
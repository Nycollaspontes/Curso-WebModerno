const fs = require('fs') //importo duas bibliotecas (fs para leitura de arquivo e path para encontrar o arquivo nas pastas)
const path = require('path')


//comeco o codigo criando uma funcao lerarquivo que vai receber uma variavel chamada caminho que so e declarada apos a funcao
//essa funcao vai me retornar uma promessa que se resolvida vai pegar o meu caminho e me trazer os seu conteudo convertido para string
//crio a constante caminho recebendo o diretorio atual , o diretorio que eu quero 
//apos isso uso a minha funcao passando como parametro o caminho criado na linha acima utilizando o metodo then para desencadear uma chamada 
//e usando um Log

function lerArquivo(caminho){
    return new Promise(resolve =>{

        fs.readFile(caminho , function (_, conteudo){

            resolve(conteudo.toString())

        })



    })

}
const caminho = path.join(__dirname , 'dados.txt')



lerArquivo(caminho)
.then(console.log)
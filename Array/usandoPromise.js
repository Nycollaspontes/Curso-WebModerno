const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve , reject ) => {
        http.get(url,res => {   
            let resultado = ''

            res.on('end' , () => {
                callback(JSON.parse(resultado))
            })
            console.error(message);
        } )
    })
}

let nomes = []


Promise.all([getTurma('A') , (getTurma('B')) , (getTurma('C')) ])
    .then(x => console.log(x))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))



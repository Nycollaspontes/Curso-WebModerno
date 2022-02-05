let pessoas = [
    {
        nome  : 'Leonardo'
    },
    {
        nome : 'Maria'
    }
]

const getChamarNome = pessoas =>'Ola   ' + pessoas.nome
let nomepessoa =  pessoas.map(getChamarNome)
console.log(nomepessoa)


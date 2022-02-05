const escola =[{
    nome : 'Turma m1' ,
    alunos : [{
        nome : ' Gustavo ',
        nota : 7.2
    },
    {
        nome : ' Julia ',
        nota : 9.3
    
    }] ,

   nome : 'Turma m2' ,
   alunos : [{
       nome : 'Felipe ',
       nota : 7.5

   },
{
    nome : 'Celine ',
    nota : 9.3
}]
        
}]
const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

function esperarPor(tempo = 2000){

    return new Promise(function(resolve){
        setTimeout(() =>{ resolve()}   ,tempo)
    
    })}


// esperarPor(2000)
// .then(() => console.log('executando promise 1 '))
// .then(esperarPor)
// .then (() => console.log('executando promise 2'))
// .then(esperarPor)
// .then(() => console.log('Executando promise 3'))


// async function executar(){
//     await esperarPor(1500)
//     console.log('Executando async/await 1 ')
//     await esperarPor(1500)
//     console.log('Executando async/await 2')
//     await esperarPor(1500)
//     console.log('Executando async/await 3')
// }
// executar()



async function numeroTempo(){

    await esperarPor(1500)
    console.log('Apos 1,5 segundos eu apareci pela primeira vez')
    await esperarPor(1500)
    console.log('Apos 3 segundos eu apareci pela segunda vez')
    await esperarPor(1500)
    console.log('Apos 4,5 segundos eu apareci pela terceira vez')
    
}

numeroTempo()



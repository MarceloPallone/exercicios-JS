//par nome/valor
const saudacao='opa'//contexto lexico 1

function exec(){
    const saudacao='falaa'//contexto lexico 2
    return saudacao
    console.log(saudacao)
}
console.log(exec())

console.log(saudacao)
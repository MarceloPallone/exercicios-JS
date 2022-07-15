const valores=[7.7,8.9,6.3,9.2]
console.log(valores[0],valores[3])
console.log(valores[4])

valores[4]=10 //adicionando valor 10 ao indice 4
console.log(valores)
console.log(valores.length)//.length mostra quantos itens tem no array

valores.push({id: 3},false,null,'teste')//.push adiciona tudo oq estiver dentro ao array
console.log(valores)

console.log(valores.pop())//.pop tira o ultimo elemento de  dentro do array
delete valores[0] //deleta o elemnto  do indice x
console.log(valores)

console.log(typeof valores)
let valor //nao inicializado
console.log(valor)

valor=null //ausencia de  valor
console.log(valor)
//console.log(valor.toString())//erro

const produto={}
console.log(produto.preco)
console.log(produto)

produto.preco=3.50
console.log(produto)

produto.preco=undefined //evitar atrivbuir undefined
console.log(!!produto.preco)
//delete produto.preco para nao dar  undefined
console.log(produto)

produto.preco=null//sem preco
console.log(!!produto.preco)
console.log(produto)
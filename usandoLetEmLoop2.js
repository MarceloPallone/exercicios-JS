const funcs=[]

for(let i=0;i<10;i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()//chamando o indice 2  da  funcao
funcs[8]()
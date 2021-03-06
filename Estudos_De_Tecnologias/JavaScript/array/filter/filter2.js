Array.prototype.filter2 = function(callback){
    let novoArray = []
    for(i = 0; i < this.length;i++){
        if(callback(this[i],i,this )){
            novoArray.push(this[i])
        }
    }
    return novoArray
}
const produtos = [
    {nome:'notebook', preco: 2499, fragil:true},
    {nome: 'iPad', preco:'4199', fragil:true},
    {nome:'copo de vidro', preco:12.49,fragil:true},
    {nome:'copo plastico',preco:18.99,fragil:false}
]
const compras = produtos.filter(function(p){
    if(p.preco > 500 && p.fragil === false )
    return p
})  
console.log(compras);
//ou
const caro = x => x.preco >=500
const fragil = x => x.fragil 
console.log(produtos.filter2(caro).filter2(fragil));

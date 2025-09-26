let produto = {
    nome: "Computador", 
    fabricante: "Positivo",
    preco: "2000",
    processador: "I3-2100",
}

//Acessando um item no objeto
console.log(produto.nome);
console.log(produto["nome"]);

//Adicionar um item no objeto
produto.armazenamento = "256 gb"
produto['memoria RAM'] = "8 gb"
console.log(produto);

//Remover um elemento
delete produto.armazenamento
delete produto['memoria RAM']
console.log(produto);
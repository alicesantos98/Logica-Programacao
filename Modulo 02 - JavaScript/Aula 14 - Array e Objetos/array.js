let listaTimes = ['Santos','Sao Paulo', 'Palmeiras','Corinthians'] //declara um array com 4 elementos

//Acessar um item do Array
console.log (listaTimes[0]); //imprime o primeiro elemento do array
console.log (listaTimes[1]); //imprime o segundo elemento do array
console.log (listaTimes[2]); //imprime o terceiro elemento do array
console.log (listaTimes[3]); //imprime o quarto elemento do array

//Adicionar um item do array
listaTimes.push('Ponte Preta') // adicona um elemento ao final do array
listaTimes.push('Flamengo') // adicona um elemento ao final do array
console.log (listaTimes.length); // imprimeo array atualizado

//Verificar o tamanho da lista
console.log(listaTimes.length);

//Adicionar um item na primeira posição
listaTimes.unshift('Fluminense') //adiciona um elemento ao inicio do array
listaTimes.unshift('vasco') //adiciona um elemento ao inicio do array
console.log (listaTimes); //imprime o array atualizado

//Remover o primeiro elemento do array
listaTimes.shift()
console.log(listaTimes);

//Remover o ultimo elemento do array
listaTimes.pop()
console.log(listaTimes);

//Encontrar a posição de um item
console.log(listaTimes.indexOf("Santos"));


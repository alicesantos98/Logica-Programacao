// Desafio 1

function calcularMedia() {
    // pega os valores digitados nos campos
  let n1 = parseFloat(document.getElementById("nota1").value);
  let n2 = parseFloat(document.getElementById("nota2").value);
 
  // verifica se os valores são válidos
  if (isNaN(n1) || isNaN(n2)) {
    document.getElementById("resultado").innerText = "Por favor, digite as duas notas!";
    return;
  }
 
  // calcula a média
  let media = (n1 + n2) / 2;
 
  // exibe dentro do parágrafo
  document.getElementById("resultado").innerText = "A média é: " + media.toFixed(2);
}
    let nota1 = parseFloat (nota1)
    let nota2 = parseFloat (nota2)


var mensagemBemVindo = alert("Olá seja bem-vindo, seu personagem é a Jinx.");

function decidirCaminho() {
  var escolha;
  var escolhaUm = "1";
  var escolhaDois = "2";

  escolha = prompt(
    "Decida o que seu herói deve fazer! Digite o caminho que seu herói deve percorrer 1 ou 2"
  );
  while (true)
    if (escolha == "1") {
      window.location.href = "../jinxFase2.html";
      break;
    } else if (escolha == "2") {
      window.location.href = "../gameover.html";
    } else {
      alert("Digite apenas 1 ou 2");
      escolha = prompt(
        "Decida o que seu herói deve fazer! Digite o caminho que seu herói deve percorrer 1 ou 2"
      );
    }
  return decidirCaminho;
}
setTimeout(decidirCaminho, 1000);

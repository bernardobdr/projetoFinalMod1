var mensagemBemVindo = alert("Parabéns, você está na fase 2.");

function decidirCaminho() {
  var escolha;
  var escolhaUm = "1";
  var escolhaDois = "2";

  escolha = prompt(
    "Decida o que seu herói deve fazer! Digite o caminho que seu herói deve percorrer 1 ou 2"
  );
  while (true)
    if (escolha == "1") {
      window.location.href = "../final.html";
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

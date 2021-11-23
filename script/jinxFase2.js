var mensagemBemVindo = alert("Parabéns! Você passou para fase 2.");

function decidirOpcao() {
  var escolha;
  var opcaoUm = "1";
  var opcaoDois = "2";

  escolha = prompt(
    "Decida o que fazer! Digite o número correspondente: 1 ou 2"
  );

  if (escolha == "1") {
    return (location = "http://127.0.0.1:5501/jinxFase3.html");
  } else if (escolha == "2") {
    return (location = "http://127.0.0.1:5501/gameover.html");
  } else {
    return alert("Número inválido");
  }
  return decidirOpcao;
}
setTimeout(decidirOpcao, 1000);

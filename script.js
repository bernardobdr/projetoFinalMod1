function decidirOpcao() {
  var escolha;
  var opcaoUm = "1";
  var opcaoDois = "2";

  escolha = prompt("Decida o que fazer! Digite o número correspondente:\n1\n2");

  if (escolha == "1") {
    return (location = "http://127.0.0.1:5501/silcoFase1.html");
  } else if (escolha == "2") {
    return (location = "http://127.0.0.1:5500/Caitlyn/gameoverFaseDois.html");
  } else {
    return alert("Número inválido");
  }
  return decidirOpcao;
}
setTimeout(decidirOpcao, 5000);

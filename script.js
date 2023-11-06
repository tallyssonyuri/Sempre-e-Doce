var botaoFixo = document.getElementById("botaoFixo");

botaoFixo.onmouseover = function() {
  botaoFixo.style.transform = "scale(1.1)";
};

botaoFixo.onmouseout = function() {
  botaoFixo.style.transform = "scale(1)";
};

var botoes = document.getElementsByClassName("botao3");

for (var i = 0; i < botoes.length; i++) {
  botoes[i].onmouseover = function() {
    this.style.transform = "scale(1.1)";
  };

  botoes[i].onmouseout = function() {
    this.style.transform = "scale(1)";
  };
}
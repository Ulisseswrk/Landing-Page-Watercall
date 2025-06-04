var seletor = document.getElementById("escolheCor");

seletor.addEventListener("change", function() {
  var corSelecionada = seletor.value; // Valor vem em formato hexadecimal

// Define os elementos do css como variáveis pra facilitar la embaixo na hora da atribuição de cores diferentes
  var nav = document.querySelector("nav");
  var footer = document.querySelector("footer");
  var txtIcones = document.querySelector(".txts-icones");
  var cards = document.querySelectorAll(".card");
  var secao3 = document.querySelector(".secao3");
  var btn = document.querySelector(".chamada-acao button");
  var header = document.querySelector("header");
  var colaboradores = document.querySelector(".colaboradores");
  var rodapeColaboradores = document.querySelector(".rodape-parceiros");
  var captacao = document.querySelector(".captacao");
  var paragrafosSecao3 = secao3.querySelectorAll(".paragrafo");


// Aplicamos as cores de fundo para os elementos em questão
  nav.style.backgroundColor = corSelecionada;
  footer.style.backgroundColor = corSelecionada;
  txtIcones.style.backgroundColor = corSelecionada;
  secao3.style.backgroundColor = ""; // Remove a cor de fundo da seção 3
  colaboradores.style.backgroundColor = corSelecionada;
  rodapeColaboradores.style.backgroundColor = corSelecionada;
  header.style.backgroundColor = corSelecionada;
  btn.style.backgroundColor = corSelecionada;
  captacao.style.backgroundColor = corSelecionada;


// Aqui fazemos uma espécie de for pra aplicar uma ação x pra todos os elementos 
  cards.forEach(function(card){
    card.style.backgroundColor = corSelecionada;
  });

  paragrafosSecao3.forEach(function(p){
    p.style.backgroundColor = corSelecionada;
  });
});
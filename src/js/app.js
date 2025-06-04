var seletor = document.getElementById("cores");

seletor.addEventListener("change", function() {
  var valorSelecionado = seletor.value;

// Transforma as cores que a priori estão em portguês pro inglês
  var coresConvertidas = {
    azul: "blue",
    vermelho: "red",
    preto: "black"
  };

// Pega a cor que o usuário escolheu e puxa dos dicionarios (Sou acostumado com python, por isso dict) e imediatamente os converte
  var corCSS = coresConvertidas[valorSelecionado];

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
  nav.style.backgroundColor = corCSS;
  footer.style.backgroundColor = corCSS;
  txtIcones.style.backgroundColor = corCSS;
  secao3.style.backgroundColor = ""; // não muda fundo da seção inteira
  colaboradores.style.backgroundColor = corCSS;
  rodapeColaboradores.style.backgroundColor = corCSS;
  header.style.backgroundColor = corCSS;
  btn.style.backgroundColor = corCSS;
  captacao.style.backgroundColor = corCSS;


// Aqui fazemos uma espécie de for pra aplicar uma ação x pra todos os elementos 
  cards.forEach(function(card){
    card.style.backgroundColor = corCSS;
  });

  paragrafosSecao3.forEach(function(p){
    p.style.backgroundColor = corCSS;
  });
});
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

// --------------------------------------------------------------------------------

const imagens = ["src/img/carousel/foto1.png", "src/img/carousel/foto2.png", "src/img/carousel/foto3.png"];
  let index = 0;

  function trocarImagem() {
    index = (index + 1) % imagens.length;
    document.getElementById("carousel-img").src = imagens[index];
  }

  setInterval(trocarImagem, 4000); // troca a cada 4 segundos

// --------------------------------------------------------------------------------

var input = document.querySelector('.input-mm');
var btn = document.getElementById('btnVerificar');
var resultado = document.getElementById('resultadoRisco');
var captacaoDiv = document.getElementById('captacao');
var titulo = document.getElementById('titulo');

btn.onclick = function() {
  var valor = parseFloat(input.value);

  if (isNaN(valor) || valor < 0) {
    resultado.textContent = 'Por favor, insira um número válido e maior ou igual a zero.';
    resultado.style.color = 'white';
    return;
  }

  if (valor <= 20) {
    resultado.textContent = 'Chuva normal (nível seguro).';
    resultado.style.color = 'white';
    captacaoDiv.style.backgroundColor = 'green';
    titulo.style.color = 'white';
  } else if (valor <= 50) {
    resultado.textContent = 'Chuva intensa (atenção).';
    captacaoDiv.style.backgroundColor = '#fff3cd';
    resultado.style.color = '#856404';
    titulo.style.color = 'black';
  } else if (valor <= 100) {
    resultado.textContent = 'Chuva perigosa (risco potencial de enchentes).';
    resultado.style.color = 'black';
    captacaoDiv.style.backgroundColor = 'yellow';
    resultado.style.backgroundColor = 'yellow';
    titulo.style.color = 'black';
  } else if (valor <= 200) {
    resultado.textContent = 'Enchente provável (medidas preventivas imediatas).';
    captacaoDiv.style.backgroundColor = '#f8d7da';
    resultado.style.backgroundColor = '#f8d7da';
    resultado.style.color = '#721c24';
    titulo.style.color = 'black';
  } else {
    resultado.textContent = 'Chuva absurda, Emergência total (alto risco de desastres). Busque ajuda imediata!';
    captacaoDiv.style.backgroundColor = '#721c24';
    resultado.style.backgroundColor = '#721c24';
    resultado.style.color = '#f8d7da';
    titulo.style.color = 'white';
  }
};

// Evento para enviar ao apertar Enter no input
input.onkeypress = function(e) {
  if (e.key === 'Enter') {
    btn.onclick();
  }
};

// --------------------------------------------------------------------------------

const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', function (e) {
    e.preventDefault(); // Evita rolagem pra id
    menu.classList.toggle('ativo');
});
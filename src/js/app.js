// Código pra fazer o carousel funcionar

const carouselImg = document.getElementById("carousel-img");
const totalImagens = 3; // Quantidade de imagens
let indiceAtual = 1;

setInterval(() => {
    indiceAtual++;
    if (indiceAtual > totalImagens) {
        indiceAtual = 1;
    }
    carouselImg.src = `src/img/carousel/foto${indiceAtual}.png`;
}, 3000); // Troca a imagem a cada 3 segundos


// Código pra mudar a cor do site
var seletor = document.getElementById("escolheCor");

seletor.addEventListener("change", function() {
  var corSelecionada = seletor.value;

  var nav = document.querySelector("nav");
  var footer = document.querySelector("footer");
  var txtIcones = document.querySelector(".txts-icones");
  var cards = document.querySelectorAll(".card");
  var secao3 = document.querySelector(".secao3");
  var header = document.querySelector("header");
  var colaboradores = document.querySelector(".colaboradores");
  var captacao = document.querySelector(".captacao");

  if (nav) nav.style.backgroundColor = corSelecionada;
  if (footer) footer.style.backgroundColor = corSelecionada;
  if (txtIcones) txtIcones.style.backgroundColor = corSelecionada;
  if (secao3) secao3.style.backgroundColor = "";
  if (colaboradores) colaboradores.style.backgroundColor = corSelecionada;
  if (header) header.style.backgroundColor = corSelecionada;
  if (captacao) captacao.style.backgroundColor = corSelecionada;

  cards.forEach(function(card) {
    card.style.backgroundColor = corSelecionada;
  });

  if (secao3) {
    var paragrafosSecao3 = secao3.querySelectorAll(".paragrafo");
    paragrafosSecao3.forEach(function(p) {
      p.style.backgroundColor = corSelecionada;
    });
  }
});

// --------------------------------------------------------------------------------

// Código pra parte de previsão de enchentes
document.addEventListener("DOMContentLoaded", function() {
  var input = document.querySelector('.input-mm');
  var btnVerificar = document.getElementById('btnVerificar');
  var resultado = document.getElementById('resultadoRisco');
  var captacaoDiv = document.getElementById('captacao');
  var titulo = document.getElementById('titulo');

  btnVerificar.onclick = function() {
    var valor = parseFloat(input.value);

    if (isNaN(valor) || valor < 0) {
      resultado.textContent = 'Por favor, insira um número válido e maior ou igual a zero.';
      resultado.style.color = 'white';
      return;
    }

    if (valor <= 20) {
      resultado.textContent = 'Chuva normal (nível seguro).';
      resultado.style.color = 'white';
      resultado.style.backgroundColor = 'green';
      captacaoDiv.style.backgroundColor = 'green';
      titulo.style.color = 'white';
    } else if (valor <= 50) {
      resultado.textContent = 'Chuva intensa (atenção).';
      captacaoDiv.style.backgroundColor = '#fff3cd';
      resultado.style.backgroundColor = '#fff3cd';
      resultado.style.color = 'black';
      titulo.style.color = 'black';
    } else if (valor <= 100) {
      resultado.textContent = 'Chuva perigosa (risco potencial de enchentes).';
      resultado.style.color = 'black';
      captacaoDiv.style.backgroundColor = 'yellow';
      resultado.style.backgroundColor = 'yellow';
      titulo.style.color = 'black';
    } else if (valor <= 200) {
      resultado.textContent = 'Enchente provável (medidas preventivas imediatas).';
      captacaoDiv.style.backgroundColor = '#f97a03';
      resultado.style.backgroundColor = '#f97a03';
      resultado.style.color = 'white';
      titulo.style.color = 'white';
    } else {
      resultado.textContent = 'Chuva absurda, Emergência total (alto risco de desastres). Busque ajuda imediata!';
      captacaoDiv.style.backgroundColor = '#721c24';
      resultado.style.backgroundColor = '#721c24';
      resultado.style.color = '#f8d7da';
      titulo.style.color = 'white';
    }
  };

  input.onkeypress = function(e) {
    if (e.key === 'Enter') {
      btnVerificar.onclick();
    }
  };
});

// --------------------------------------------------------------------------------

// Código pra aparecer e sumir o menu hamburguer
const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', function (e) {
  e.preventDefault(); // Evita rolagem para o id
  menu.classList.toggle('ativo');
});
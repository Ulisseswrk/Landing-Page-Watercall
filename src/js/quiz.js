const quizForm = document.getElementById("quiz-formulario");
const resultDiv = document.getElementById("result");

// Respostas corretas variadas (misturando 'a', 'b', 'c', 'd')
const respostasCorretas = {
  q1: "c",
  q2: "c",
  q3: "b",
  q4: "a",
  q5: "b",
  q6: "c",
  q7: "a",
  q8: "b",
  q9: "a",
  q10: "b"
};

quizForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Verifica se todas as questões foram respondidas
  for (let key in respostasCorretas) {
    const resposta = quizForm.querySelector(`input[name="${key}"]:checked`);
    if (!resposta) {
      alert("Por favor, responda todas as questões.");
      return;
    }
  }

  // Calcula a pontuação
  let pontos = 0;

  for (let key in respostasCorretas) {
    const resposta = quizForm.querySelector(`input[name="${key}"]:checked`);
    if (resposta.value === respostasCorretas[key]) {
      pontos++;
    }
  }

  resultDiv.textContent = `Você acertou ${pontos} de 10 questões.`;
});

// --------------------------------------------------------------------------------

// Código pra aparecer e sumir o menu hamburguer
const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', function (e) {
  e.preventDefault(); // Evita rolagem para o id
  menu.classList.toggle('ativo');
});
const quizForm = document.getElementById("quiz-formulario");
const resultDiv = document.getElementById("result");

const respostasCorretas = {
  q1: "c",
  q2: "c",
  q3: "b",
  q4: "a",
  q5: "a",
  q6: "b",
  q7: "a",
  q8: "b",
  q9: "a",
  q10: "b"
};

quizForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Validação: verificar se todas as perguntas foram respondidas
  for (let key in respostasCorretas) {
    const resposta = quizForm.querySelector(`input[name="${key}"]:checked`);
    if (!resposta) {
      alert(`Por favor, responda todas as questões.`);
      return; // Para a execução se encontrar pergunta sem resposta
    }
  }

  // Se passou na validação, calcula os pontos
  let pontos = 0;

  for (let key in respostasCorretas) {
    const resposta = quizForm.querySelector(`input[name="${key}"]:checked`);
    if (resposta.value === respostasCorretas[key]) {
      pontos++;
    }
  }

  resultDiv.textContent = `Você acertou ${pontos} de 10 questões.`;
});
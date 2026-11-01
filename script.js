const campoSenha = document.getElementById("senha");
const resultado = document.getElementById("resultado");
const nota = document.getElementById("nota");
const motivo = document.getElementById("motivo");
const dica = document.getElementById("dica");
const feedback = document.getElementById("feedback");
campoSenha.addEventListener("input", function () {
    if (campoSenha.value === "") {
        resultado.hidden = true;
        feedback.textContent = "Depois de digitar, explicaremos a nota e como melhorar.";
        feedback.hidden = false;
        return;
    }
    feedback.hidden = true;
    const tamanho = campoSenha.value.length;
    const senhaEmMinusculas = campoSenha.value.toLowerCase();

const temSequencia =
  senhaEmMinusculas.includes("123") ||
  senhaEmMinusculas.includes("321") ||
  senhaEmMinusculas.includes("abc") ||
  senhaEmMinusculas.includes("cba") ||
  senhaEmMinusculas.includes("qwerty") ||
  senhaEmMinusculas.includes("ytrewq");

    if (tamanho <= 7) {
        nota.textContent = "Fraca";
        motivo.textContent = "Até 7 caracteres é pouco tamanho.";
        dica.textContent = "Junte palavras sem relação entre si para criar uma frase mais longa.";
        resultado.hidden = false;
        feedback.textContent = "Fraca: tente uma frase mais longa.";
    } else if (tamanho <= 14) {
        nota.textContent = "Pode melhorar";
        motivo.textContent = "Ainda está abaixo do tamanho que este medidor usa como referência para forte.";
        dica.textContent = "Junte palavras sem relação entre si; quanto mais longa e imprevisível, melhor.";
        resultado.hidden = false;
    } else {
        nota.textContent = "Em análise";
        motivo.textContent = "O tamanho permite considerar forte, mas ainda falta verificar padrões previsíveis.";
        dica.textContent = "A nota final depende dessas verificações.";
        resultado.hidden = false;
    }
});

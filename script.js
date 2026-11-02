const senhasConhecidas = [
    "senha",
    "admin",
    "123456",
    "password",
    "abc123",
    "zk9#vq",
    "123456123456123456",
    "tijolo lua abacate bicicleta"
];
const campoSenha = document.getElementById("senha");
const resultado = document.getElementById("resultado");
const nota = document.getElementById("nota");
const motivo = document.getElementById("motivo");
const dica = document.getElementById("dica");
const feedback = document.getElementById("feedback");
function ehBlocoRepetido(texto) {
    for (let tamanhoBloco = 1; tamanhoBloco <= texto.length / 2; tamanhoBloco++) {
        if (texto.length % tamanhoBloco === 0) {
            const bloco = texto.slice(0, tamanhoBloco);
            const repeticoes = texto.length / tamanhoBloco;

            if (bloco.repeat(repeticoes) === texto) {
                return true;
            }
        }
    }

    return false;
}
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
    const temBlocoRepetido = ehBlocoRepetido(senhaEmMinusculas);
    const senhaConhecida = senhasConhecidas.includes(senhaEmMinusculas.trim());
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
    } else if (tamanho <= 14) {
        nota.textContent = "Pode melhorar";
        motivo.textContent = "Ainda está abaixo do tamanho que este medidor usa como referência para forte.";
        dica.textContent = "Junte palavras sem relação entre si; quanto mais longa e imprevisível, melhor.";
        resultado.hidden = false;
    } else {
        nota.textContent = "Forte";
        motivo.textContent = "Atingiu o tamanho de referência e passou pelas verificações simples deste medidor.";
        dica.textContent = "Quanto mais longa e imprevisível, melhor. Use uma senha diferente em cada site.";
        resultado.hidden = false;
    }

    if (temSequencia && tamanho > 14) {
        nota.textContent = "Pode melhorar";
        motivo.textContent = "A senha é longa, mas contém uma sequência previsível.";
        dica.textContent = "Troque a sequência por palavras sem relação entre si.";
    } else if (temSequencia && tamanho > 7) {
        nota.textContent = "Fraca";
        motivo.textContent = "Além do tamanho, contém uma sequência previsível.";
        dica.textContent = "Evite sequências como 123, abc ou qwerty.";
    }

    if (temBlocoRepetido) {
        nota.textContent = "Fraca";
        motivo.textContent = "A senha é formada pela repetição de um mesmo bloco.";
        dica.textContent = "Escolha uma frase longa e imprevisível, sem repetir o mesmo trecho.";
    } else if (senhaConhecida) {
        nota.textContent = "Fraca";
        motivo.textContent = "Essa senha está na lista de senhas comuns ou de exemplos publicados.";
        dica.textContent = "Escolha uma frase inventada que não esteja nessa lista.";
    }
});

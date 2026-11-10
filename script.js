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
const dicaBloco = document.getElementById("dica-bloco");
const estadoVisual = document.getElementById("estado-visual");
const personagem = document.getElementById("personagem");
const personagemLegenda = document.getElementById("personagem-legenda");

function atualizarPersonagem(estado) {
    if (estado === "Fraca") {
        personagem.src = "assets/personagem-aflito.png";
        personagem.alt = "Personagem com expressão aflita";
        personagemLegenda.textContent = "Expressão aflita.";
        resultado.dataset.estado = "fraca";
    } else if (estado === "Pode melhorar") {
        personagem.src = "assets/personagem-em-duvida.png";
        personagem.alt = "Personagem com expressão em dúvida";
        personagemLegenda.textContent = "Expressão em dúvida.";
        resultado.dataset.estado = "media";
    } else if (estado === "Forte") {
        personagem.src = "assets/personagem-satisfeito.png";
        personagem.alt = "Personagem com expressão satisfeita";
        personagemLegenda.textContent = "Expressão satisfeita.";
        resultado.dataset.estado = "forte";
    } else {
        personagem.src = "assets/personagem-neutro.png";
        personagem.alt = "Personagem com expressão neutra, aguardando um exemplo";
        personagemLegenda.textContent = "Expressão neutra.";
        resultado.dataset.estado = "vazio";
    }
}
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
        nota.textContent = "—";
        motivo.textContent = "Digite uma senha de exemplo para ver por que ela receberia uma nota.";
        dica.textContent = "";
        dicaBloco.hidden = true;
        estadoVisual.textContent = "Aguardando";
        estadoVisual.hidden = false;
        atualizarPersonagem("vazio");
        return;
    }
    dicaBloco.hidden = false;
    const tamanho = campoSenha.value.length;
    const senhaEmMinusculas = campoSenha.value.toLowerCase();
    let temNumero = false;
    let temLetra = false;
    let temSimbolo = false;
    for (const caractere of campoSenha.value) {
        if ("0123456789".includes(caractere)) {
            temNumero = true;
        } else if (caractere.toLowerCase() !== caractere.toUpperCase()) {
            temLetra = true;
        } else if (caractere.trim() !== "") {
            temSimbolo = true;
        }
    }
    const temVariedade = (temLetra && temNumero) || (temLetra && temSimbolo) || (temNumero && temSimbolo);
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
        motivo.textContent = temVariedade
            ? "Você misturou tipos de caracteres, mas até 7 caracteres ainda é pouco tamanho."
            : "Até 7 caracteres é pouco tamanho.";
        dica.textContent = "Junte palavras sem relação entre si para criar uma frase mais longa.";
    } else if (tamanho <= 14) {
        nota.textContent = "Pode melhorar";
        motivo.textContent = temVariedade
            ? "A variedade ajuda, mas ainda está abaixo do tamanho que este medidor usa como referência para forte."
            : "Ainda está abaixo do tamanho que este medidor usa como referência para forte.";
        dica.textContent = "Junte palavras sem relação entre si; quanto mais longa e imprevisível, melhor.";
    } else {
        nota.textContent = "Forte";
        motivo.textContent = "Atingiu o tamanho de referência e passou pelas verificações simples deste medidor.";
        dica.textContent = "Quanto mais longa e imprevisível, melhor. Use uma senha diferente em cada site.";
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

    estadoVisual.hidden = true;
    atualizarPersonagem(nota.textContent);
});

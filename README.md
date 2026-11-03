# Senha Forte

**Atualizado em 3 de novembro de 2026**

**Status:** protótipo local em desenvolvimento. O projeto está versionado no GitHub, mas ainda não foi publicado como página web.

Senha Forte é um projeto de aprendizado que une interface, programação e segurança defensiva. A ideia é avaliar uma senha inventada no navegador e explicar, em linguagem simples, o motivo da nota e como melhorá-la. Um personagem ilustrado terá expressões aflita, em dúvida e satisfeita.

> Use somente senhas inventadas. Nunca digite uma senha real neste projeto.

**Privacidade:** a senha fica no navegador. O projeto não envia, salva nem mostra a senha no console.

## Design

- [Rascunho da tela e das expressões](design/Rascunho%20%E2%80%A2%20Senha%20e%20avalia%C3%A7%C3%A3o.png)
- [Arquivo no Figma](https://www.figma.com/design/KeqHO1oMBDl9ikuWDXo3Qg/Rascunho-%E2%80%94-tela-de-senha-e-avalia%C3%A7%C3%A3o?node-id=0-1)

A decisão de design para o estado vazio é orientar, sem dar nota a um campo sem senha. A nota fica sem rótulo, o motivo explica o uso da ferramenta e o personagem fica neutro. Durante a avaliação, a intenção é mostrar somente a expressão correspondente ao estado atual.

## O que já foi feito

- Hoje ajustei a nota para considerar tamanho, sequências, blocos repetidos e senhas conhecidas.
- Também ajustei o aviso de privacidade e a largura da tela para celular.
- Comecei a identificar letras, números e símbolos. Espaços não contam como símbolo.

O personagem ainda não está conectado à nota, e o bônus de variedade não foi implementado. As listas de padrões e senhas conhecidas são pequenas e não detectam todas as senhas previsíveis.

## Critérios e decisões

O comprimento tem o maior peso. A variedade de caracteres pode dar um bônus pequeno, mas símbolos não devem fazer uma senha curta parecer forte. Frases longas com palavras sem relação entre si são uma opção fácil de lembrar. Espaços contam no comprimento. A nota não dependerá só da cor: o resultado terá texto e personagem.

| Comprimento | Nota máxima da régua | Regra |
| --- | --- | --- |
| Até 7 caracteres | Fraca | Explica que falta tamanho. |
| De 8 a 14 caracteres | Pode melhorar | Reconhece o que está bom e sugere uma frase mais longa. |
| 15 ou mais | Pode chegar a forte | Só depois de passar pelas verificações de previsibilidade. |

A mensagem de melhoria não mostra quantos caracteres faltam. Ela sugere juntar palavras sem relação entre si, para evitar incentivar alguém a acrescentar uma única letra só para cruzar o limite. O corte é uma escolha de design do projeto, não uma fronteira que certifica segurança.

### Por que a régua usa 15 caracteres?

Usei como referência o mínimo de 15 caracteres que o [NIST SP 800-63B](https://pages.nist.gov/800-63-4/sp800-63b.html) exige para senhas usadas como único fator de autenticação. Senhas usadas somente como parte de um processo com MFA podem ter mínimo de 8 caracteres. A [CISA recomenda pelo menos 16 caracteres](https://www.cisa.gov/resources-tools/resources/secure-our-world-passwords-tip-sheet). Optei por 15 como uma régua educativa para incentivar senhas longas. A nota é uma estimativa: atingir 15 caracteres não certifica que uma senha é segura.

### Regras de previsibilidade

- Uma senha presente na lista local de senhas comuns ou de exemplos publicados terá teto **Fraca**.
- Um bloco repetido, como um trecho repetido várias vezes, também terá teto **Fraca**.
- Sequências óbvias reduzem a nota em um degrau.
- A variedade pode dar um bônus pequeno, mas nunca decide sozinha se a senha é forte.
- O medidor não pede nome, aniversário ou outros dados pessoais.

A detecção é limitada às regras e à lista incluídas no projeto. Ela não consulta serviços externos nem sabe se uma senha foi vazada ou reutilizada.

## Exemplos publicados

Estes exemplos são fictícios e servem apenas para documentar critérios. Não devem ser usados como senhas. Eles estão na lista local de senhas conhecidas.

| Exemplo | Critério ilustrado |
| --- | --- |
| abc123 | Curta e com sequências óbvias. |
| Zk9#vQ | Curta, mesmo com variedade de caracteres. |
| 123456123456123456 | Longa, mas repete um bloco previsível. |
| tijolo lua abacate bicicleta | Frase longa usada para discutir comprimento; publicada, portanto não é uma senha secreta. |



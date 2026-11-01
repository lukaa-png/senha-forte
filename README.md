# Senha Forte

**Atualizado em 1º de novembro de 2026**  
**Status:** protótipo local em desenvolvimento. O projeto está versionado no GitHub, mas ainda não foi publicado como página web.

Senha Forte é um projeto de aprendizado que une interface, programação e segurança defensiva. A ideia é avaliar uma senha inventada no navegador e explicar, em linguagem simples, o motivo da nota e como melhorá-la. Um personagem ilustrado terá expressões aflita, em dúvida e satisfeita.

> Use somente senhas inventadas. Nunca digite uma senha real neste projeto.

## Design

- [Rascunho da tela e das expressões](design/Rascunho%20%E2%80%A2%20Senha%20e%20avalia%C3%A7%C3%A3o.png)
- [Arquivo no Figma](https://www.figma.com/design/KeqHO1oMBDl9ikuWDXo3Qg/Rascunho-%E2%80%94-tela-de-senha-e-avalia%C3%A7%C3%A3o?node-id=0-1)

A decisão de design para o estado vazio é orientar, sem dar nota a um campo sem senha. A nota fica sem rótulo, o motivo explica o uso da ferramenta e o personagem fica neutro. Durante a avaliação, a intenção é mostrar somente a expressão correspondente ao estado atual.

## O que já foi feito

- Estrutura inicial em HTML e estilo básico em CSS.
- Campo de senha com rótulo e aviso para usar somente exemplos inventados.
- Resultado com espaços separados para nota, motivo e dica.
- JavaScript reage à digitação e atualiza o resultado conforme o tamanho:
  - Até 7 caracteres: **Fraca**.
  - De 8 a 14: **Pode melhorar**.
  - 15 ou mais: **Em análise**, até as verificações de previsibilidade serem implementadas.
- O código já identifica algumas sequências (123, 321, abc, cba, qwerty, ytrewq), mas ainda não usa essa detecção para alterar a nota.

Esta é uma etapa intermediária. O medidor ainda não aplica os descontos por sequência, não detecta blocos repetidos nem compara com uma lista de senhas comuns. O personagem também ainda não está conectado à nota.

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

### Regras de previsibilidade planejadas

- Uma senha presente na lista local de senhas comuns ou de exemplos publicados terá teto **Fraca**.
- Um bloco repetido, como um trecho repetido várias vezes, também terá teto **Fraca**.
- Sequências óbvias reduzem a nota em um degrau.
- A variedade pode dar um bônus pequeno, mas nunca decide sozinha se a senha é forte.
- O medidor não pede nome, aniversário ou outros dados pessoais.

A detecção será limitada às regras e à lista incluídas no projeto. Ela não consulta serviços externos nem sabe se uma senha foi vazada ou reutilizada.

## Exemplos publicados

Estes exemplos são fictícios e servem apenas para documentar critérios. Não devem ser usados como senhas. Como serão publicados, deverão ser incluídos na lista local de exemplos conhecidos quando essa verificação for implementada.

| Exemplo | Critério ilustrado |
| --- | --- |
| abc123 | Curta e com sequências óbvias. |
| Zk9#vQ | Curta, mesmo com variedade de caracteres. |
| 123456123456123456 | Longa, mas repete um bloco previsível. |
| tijolo lua abacate bicicleta | Frase longa usada para discutir comprimento; publicada, portanto não é uma senha secreta. |

## Privacidade e limites

A regra central do projeto é que a senha nunca saia do navegador, não seja guardada em localStorage e não apareça no console. No estado atual, o código-fonte não contém envio para servidor, armazenamento local nem impressão da senha no console. Essa revisão do código não substitui uma verificação final antes da publicação.

O medidor avalia somente o texto digitado. Ele não consegue saber se a senha é pessoal, vazada, compartilhada ou reutilizada. Por isso, a nota nunca é uma garantia. Use uma senha diferente em cada site e não teste senhas reais.

## Mini glossário

**Força bruta:** tentativa de muitas combinações até encontrar uma senha.  
Quanto mais possibilidades reais existirem, mais tentativas serão necessárias.

**Ataque de dicionário:** tentativa de palavras, frases e padrões prováveis.  
Uma senha previsível pode ser testada cedo, mesmo que pareça comprida.

**Senha comum:** senha usada por muitas pessoas ou presente em listas conhecidas.  
Por ser previsível, não fica forte só por ter símbolos.

**Autenticação:** processo de verificar se alguém controla um autenticador ao acessar uma conta.  
Uma senha pode fazer parte desse processo; a nota deste projeto não autentica ninguém.

## Próximos passos

1. Usar temSequencia para aplicar o rebaixamento por sequências.
2. Detectar blocos repetidos e comparar com uma lista local pequena, incluindo os exemplos publicados.
3. Refinar os motivos e as dicas para cada resultado.
4. Conectar as três expressões do personagem e o estado neutro.
5. Revisar a privacidade e testar os critérios somente com exemplos inventados.
6. Publicar a página e confirmar que a avaliação pode ser refeita do zero.

O código é escrito pelo autor como exercício de aprendizado. A IA atua como mentora, explicando conceitos e erros em etapas pequenas.



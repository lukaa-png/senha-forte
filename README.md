# Senha Forte

**Status:** rascunho de interface e critérios de avaliação. O medidor ainda não foi implementado nem publicado.

Senha Forte é um projeto de aprendizado em design de interface, JavaScript e segurança defensiva. A proposta é avaliar uma **senha de exemplo** no navegador e explicar, em linguagem simples, por que ela recebeu a nota fraca, média ou forte. Um personagem ilustrado deverá reagir com três expressões: aflito, em dúvida e satisfeito.

> Use apenas senhas inventadas para testar. Nunca digite uma senha real sua neste projeto.

## Design

- [Rascunho da tela e das três expressões](design/Rascunho%20%E2%80%A2%20Senha%20e%20avalia%C3%A7%C3%A3o.png)
- [Arquivo no Figma](https://www.figma.com/design/KeqHO1oMBDl9ikuWDXo3Qg/Rascunho-%E2%80%94-tela-de-senha-e-avalia%C3%A7%C3%A3o?node-id=0-1)

O PNG registra a etapa de exploração: as três expressões aparecem juntas para comparação. Na interface em uso, a intenção é mostrar somente a expressão correspondente à nota atual. O estado antes da digitação ainda está sendo ajustado no Figma.

## Escopo da primeira versão

- Um campo de senha, uma nota e uma explicação do motivo da nota.
- Uma dica simples e respeitosa para melhorar a senha.
- Um personagem com três expressões, sem animações elaboradas.
- Avaliação feita somente no navegador, sem servidor e sem salvar a senha.
- Aviso de que a nota é uma estimativa, não uma garantia de segurança.

Depois da primeira versão publicada, possíveis melhorias serão consideradas uma por vez: mostrar ou ocultar a senha, consultar uma lista local de senhas comuns e animar o personagem.

## Critérios pensados antes do código

- **Tamanho tem o maior peso.** Uma senha curta não deve chegar a “forte” apenas por misturar letras, números e símbolos.
- **Variedade ajuda, mas é um bônus menor.** Símbolos não compensam pouco comprimento.
- **Sequências óbvias reduzem a nota.** Exemplos: `123`, `abc` e padrões conhecidos do teclado.
- **Repetições e palavras previsíveis merecem atenção.** Uma sequência longa repetida não deve parecer forte só pelo número de caracteres. A detecção mais ampla desses casos ainda precisa ser delimitada para a v1.
- **A nota precisa explicar a decisão.** Além de “fraca”, “média” ou “forte”, a tela deve mostrar o motivo e uma ação possível para melhorar.

O medidor só poderá observar o texto digitado. Ele não saberá se uma senha foi publicada, vazada, reutilizada ou contém um dado pessoal de quem a criou. Por isso, nenhuma nota deve ser apresentada como garantia.

### Casos de exemplo para orientar os testes

| Exemplo inventado | Avaliação desejada | Motivo principal |
| --- | --- | --- |
| `abc123` | Fraca | Curta e formada por sequências óbvias. |
| `Zk9#vQ` | Fraca | Tem variedade, mas apenas seis caracteres. |
| `123456123456123456` | Fraca | Repete um padrão previsível. |
| `tijolo lua abacate bicicleta` | Não usar como senha real | Ilustra uma frase longa; por estar publicada aqui, deixou de ser secreta. |

Esses exemplos são material de estudo, **não sugestões de senhas para uso**. Os limites exatos entre as três notas ainda serão definidos antes de escrever a lógica.

## Privacidade e cuidado nos testes

Na implementação planejada, o texto digitado não deve sair do navegador: nada de envio por rede, `localStorage` ou impressão da senha no console. Os testes devem usar somente exemplos inventados. Como ainda não existe código funcional, essas são **regras de implementação**, não funcionalidades já verificadas.

## Mini glossário

**Força bruta:** tentativa de muitas combinações até encontrar a senha.
Quanto mais possibilidades reais houver, mais trabalho esse método exige.

**Ataque de dicionário:** tentativa de palavras, frases e padrões que as pessoas costumam escolher.
Uma senha previsível pode ser testada cedo, mesmo que pareça comprida.

**Senha comum:** senha usada por muitas pessoas ou presente em listas conhecidas.
Por ser fácil de prever, não deve ser considerada forte só por ter símbolos.

**Autenticação:** processo de verificar se alguém é quem afirma ser ao acessar uma conta.
A senha pode fazer parte desse processo, mas a nota deste projeto não autentica ninguém.

## Próximos passos

1. Finalizar no Figma o estado vazio e as três expressões em uso individual.
2. Definir os limites das notas e as mensagens de feedback.
3. Escrever o HTML e o CSS da tela.
4. Implementar a avaliação em JavaScript, testá-la com exemplos inventados e publicar a página.

O código será escrito pelo autor do projeto como exercício de aprendizado. Este README registra as decisões de design e segurança tomadas até aqui.


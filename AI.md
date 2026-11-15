# Uso de Inteligência Artificial — AQUA ALERT

Este documento resume as consultas feitas à inteligência artificial durante o desenvolvimento do AQUA ALERT. Os prompts abaixo foram escritos de forma simplificada para representar as dúvidas do grupo; não são transcrições literais das conversas.

## 1. Ferramenta utilizada

| Ferramenta | Finalidade |
|---|---|
| Claude (Anthropic) | Esclarecimento de dúvidas técnicas, pesquisa sobre APIs, orientações para publicação do site, interpretação de erros no GitHub e comentários sobre o projeto. |

## 2. Exemplos de interações

**Prompt 1 — API de chuva**
> "Me ajuda a encontrar uma API que mostre os dados de chuva?"

**Resposta (resumo):** indicou a Open-Meteo como uma opção gratuita e explicou, de forma geral, quais informações meteorológicas ela disponibiliza.

**Prompt 2 — Publicação na Vercel**
> "Como faço para colocar nosso site na Vercel?"

**Resposta (resumo):** explicou as etapas gerais para conectar o repositório à Vercel e publicar uma aplicação React.

**Prompt 3 — Erro ao fazer commit**
> "Está aparecendo um erro quando tento fazer o commit. Como resolvo?"

**Resposta (resumo):** orientou a verificar a mensagem de erro e os comandos do Git para identificar o problema. A solução específica depende do erro apresentado.

**Prompt 4 — Opinião sobre o site e os requisitos**
> "O que você achou do nosso site? Ele está de acordo com os requisitos do PDF?"

**Resposta (resumo):** sugeriu comparar as funcionalidades e as telas do projeto com os itens exigidos no enunciado, observando possíveis pontos que precisariam de revisão. Essa opinião não substitui a conferência feita pelo grupo.

## 3. Como as orientações foram aproveitadas

As consultas sobre APIs ajudaram a entender opções de fontes de dados meteorológicos. As orientações sobre Vercel e Git foram usadas como referência para dúvidas de publicação e versionamento. Na etapa final, o grupo solicitou uma avaliação geral do site e uma comparação com os requisitos do PDF da Global Solution.

**Registro complementar:** o rascunho anterior deste documento também descrevia sugestões da IA sobre organização do projeto e exemplos de implementação. O grupo deve conferir o histórico e registrar essas contribuições caso tenham sido utilizadas. Este resumo não deve ser interpretado como um registro completo de todas as interações.

## 4. Verificação pelo grupo

- O grupo registrou testes do CRUD com a MockAPI, incluindo o cadastro de três leituras: Normal, Atenção e Perigo.
- Também foram registradas a edição de uma leitura, com mudança de Normal para Perigo, e a exclusão de uma leitura de teste.
- Para a revisão final, os requisitos do PDF devem ser conferidos diretamente no projeto, pois uma avaliação da IA pode deixar passar detalhes.

## 5. Análise crítica

- **Benefícios:** esclarecimento de dúvidas técnicas, indicação de documentação e serviços úteis e apoio na identificação de pontos a revisar.
- **Limitações:** as respostas são sugestões e podem não corresponder exatamente à configuração do projeto ou a todos os requisitos da atividade.
- **Cuidados:** conferir as orientações na documentação oficial, verificar o funcionamento do site e manter o registro do uso de IA fiel às atividades realmente realizadas.

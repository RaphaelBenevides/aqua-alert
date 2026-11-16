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

Durante o desenvolvimento do AQUA ALERT, o grupo utilizou a IA como apoio para esclarecer dúvidas e buscar sugestões sobre algumas funcionalidades do projeto.

As consultas ajudaram a entender melhor a organização das pastas e componentes, seguindo como referência os projetos trabalhados em aula. Também foram discutidas questões relacionadas à integração com a MockAPI, utilizada no cadastro e gerenciamento das leituras (Service.ts), e à Open-Meteo, utilizada para consultar informações de chuva (ClimaService.ts).

Outras orientações envolveram a utilização dos hooks useLeituras, useFormLeitura e useClima, além de ajustes pontuais na navegação, no formulário e na exibição dos dados meteorológicos.

As sugestões aproveitadas foram revisadas pelo grupo considerando o conteúdo das aulas e as necessidades do sistema. A IA também foi consultada para esclarecer dúvidas sobre Git, publicação na Vercel e verificação dos requisitos do projeto.

## 4. Verificação pelo grupo

- O grupo registrou testes do CRUD com a MockAPI, incluindo o cadastro de três leituras: Normal, Atenção e Perigo.
- Também foram registradas a edição de uma leitura, com mudança de Normal para Perigo, e a exclusão de uma leitura de teste.

Na etapa final, o grupo também verificou o funcionamento do site após a publicação na Vercel. Foram realizados testes de cadastro e exclusão de leituras para confirmar se as funcionalidades continuavam funcionando corretamente na versão publicada.

## 5. Análise crítica

- **Benefícios:** esclarecimento de dúvidas técnicas, indicação de documentação e serviços úteis e apoio na identificação de pontos a revisar.
- **Limitações:** as respostas são sugestões e podem não corresponder exatamente à configuração do projeto ou a todos os requisitos da atividade.
- **Dificuldades:** Durante o desenvolvimento, algumas orientações precisaram ser analisadas e adaptadas à estrutura do projeto e ao conteúdo trabalhado nas aulas. Também surgiram dificuldades na utilização do Git, principalmente na configuração do repositório e na execução de alguns comandos. Nessas situações, as consultas à IA ajudaram a entender os erros e buscar possíveis soluções, que foram verificadas pelo grupo antes de serem aplicadas.
# AQUA ALERT — Monitoramento Inteligente de Enchentes

Aplicação web da Global Solution FIAP 2026.2 (CitizenTech) para as disciplinas **Front-end Design** e **Web Development** — Engenharia de Software, 1º ano.

## Ficha da CitizenTech

| Item | Descrição |
|---|---|
| **Nome da CitizenTech** | AQUA ALERT |
| **Cidade e bairro** | São Paulo — Ipiranga |
| **Cidadão beneficiado** | Moradores, motoristas e comerciantes de áreas sujeitas a alagamento |
| **Problema, em uma frase** | As pessoas não sabem quando o nível da água está subindo na sua região e são pegas de surpresa pelas enchentes. |
| **Como funciona** | Um sensor mede o nível da água e a chuva (e a aplicação também consulta a chuva real pela API Open-Meteo); o sistema classifica o risco em Normal, Atenção ou Perigo; a aplicação web mostra os níveis, os alertas e o histórico de ocorrências. |
| **O que cada parte faz** | Edge Computing & Computer Systems (Sensor): simula no ESP32 os sensores de nível da água e de chuva, faz a média das leituras, descarta leituras inválidas, classifica o risco e aciona LEDs e buzzer conforme o estado, enviando cada leitura no mesmo formato usado pelo site · Computational Thinking with Python (Lógica): recebe as leituras de nível da água e de chuva, aplica a regra de risco (Normal, Atenção e Perigo) e informa ao cidadão o estado atual e a orientação de segurança · Front-end Design e Web Development (este repositório): interface e interação com o cidadão · Differentiated Problem Solving (Matemática): modela a subida do nível da água ao longo do tempo, usando limites, derivadas para calcular a taxa de variação e integrais para determinar o aumento acumulado · Software & Total Experience Design (Experiência): define o problema, o escopo, os requisitos e regras de negócio, o diagrama de casos de uso, o protótipo das telas e o roadmap da solução · Storytelling & Inspiração Empreendedora (Pitch): _[completar]_ |
| **Link do repositório** | https://github.com/RaphaelBenevides/aqua-alert (privado) |
| **Link do deploy** | https://aqua-alert-sigma.vercel.app |
| **Indicador de impacto** | Número de alertas emitidos antes de o ponto atingir o estado de Perigo; tempo de antecedência do aviso. |
| **ODS conectados** | ODS 11 (Cidades sustentáveis), ODS 13 (Ação contra a mudança do clima), ODS 9 (Inovação e infraestrutura) |

## Integrantes

| Nome completo | RM |
|---|---|
| Alessandro Malarenko Scarcella | RM567769 |
| Felipe Medino Neves | RM573287 |
| Felipe Satio Machado Morita | RM568859 |
| Lucas Rodrigo Gomes Pinheiro | RM572580 |
| Raphael dos Santos Benevides | RM573378 |

## Funcionalidades

- **Chuva real agora** (API Open-Meteo): o Início mostra a chuva (mm/h) e a temperatura do bairro escolhido, classifica o risco e pode ser atualizado a qualquer momento pelo botão de atualizar. Se estiver chovendo forte de verdade, o painel muda para Atenção ou Perigo.
- **Página 404** quando o endereço não existe, e o menu destaca a página atual.
- **Painel inicial**: alerta da leitura mais recente com orientação ao morador e resumo de leituras por estado.
- **Histórico de leituras** com filtro por estado (Todos, Normal, Atenção, Perigo).
- No formulário, o botão **"Usar chuva real de agora"** preenche a chuva com o valor da Open-Meteo.
- **CRUD completo** na API externa: cadastrar, consultar, editar e apagar leituras.
- **Classificação automática do risco** enquanto o usuário digita os valores.
- **Validação** dos dados antes do envio.
- Layout responsivo (celular e computador), com bom contraste e textos simples.

### Regra de classificação (limites definidos pelo grupo, não oficiais)

| Nível detectado | Estado | Resposta |
|---|---|---|
| Abaixo de 50 cm e 20 mm/h | Normal | Monitoramento |
| A partir de 50 cm ou 20 mm/h | Atenção | Aviso preventivo |
| A partir de 100 cm ou 50 mm/h | Perigo | Alerta de risco |

## Tecnologias

- React 19 + TypeScript + Vite
- Tailwind CSS 4 (plugin `@tailwindcss/vite`)
- React Router DOM (rotas)
- Axios (consumo da API)
- Phosphor Icons e React Spinners
- APIs externas:
  - [MockAPI](https://mockapi.io): CRUD das leituras (recurso `leituras`)
  - [Open-Meteo](https://open-meteo.com): chuva e temperatura reais, gratuita e sem chave

## Estrutura do projeto

```
src/
├── models/        → formato dos dados (Leitura e Clima)
├── services/      → ACESSO AOS DADOS: CRUD na MockAPI (Service.ts) e chuva real (ClimaService.ts)
├── utils/         → LÓGICA DE NEGÓCIO: risco e validação (risco.ts), conversão da chuva (clima.ts)
├── hooks/         → CUSTOM HOOKS: useLeituras, useFormLeitura e useClima
├── components/    → CAMADA VISUAL: 13 componentes reutilizáveis
└── pages/         → páginas: Home, Leituras, FormularioLeitura, Sobre e NaoEncontrada (404)
```

**Páginas:** Home, Leituras, FormularioLeitura (cadastro/edição), Sobre e NaoEncontrada (404).

**Componentes:** Navbar, Footer, Hero, ClimaAgora, PainelAlerta, CardResumo, CardLeitura, BadgeStatus, FiltroStatus, FormLeitura, TabelaNiveis, Carregando, MensagemVazia.

**Hooks:** `useState` e `useEffect` nos custom hooks `useLeituras` (lista, filtro, resumo, exclusão), `useFormLeitura` (formulário de cadastro/edição) e `useClima` (chuva real do bairro escolhido). Os componentes visuais não acessam a API diretamente.

## Pré-requisitos

- [Node.js](https://nodejs.org) 20 ou superior
- Git
- Conta gratuita no [MockAPI](https://mockapi.io)

## Configurando a API (MockAPI)

A API do projeto já está configurada. Os passos abaixo só são necessários para usar uma base própria.

1. Entre em https://mockapi.io e crie um projeto (ex.: `aqua-alert`, prefixo `/api/v1`).
2. Crie um recurso chamado **`leituras`** com os campos:
   - `local` (String), `bairro` (String), `nivelAgua` (Number), `chuva` (Number), `dataHora` (String), `observacao` (String)
3. Copie o endereço do projeto (algo como `https://xxxx.mockapi.io/api/v1`) e coloque no `baseURL` do arquivo `src/services/Service.ts`.

## Instalação e execução

```bash
git clone https://github.com/RaphaelBenevides/aqua-alert.git
cd aqua-alert
npm install
npm run dev
```

Acesse http://localhost:5173.

Outros comandos:

```bash
npm run build     # gera a versão de produção na pasta dist
npm run preview   # testa a versão de produção
npm run lint      # verifica o código
```

## Deploy

Projeto publicado na Vercel: https://aqua-alert-sigma.vercel.app

1. Em https://vercel.com, clique em **Add New → Project** e importe o repositório do GitHub.
2. Framework: **Vite** (detectado automaticamente). Clique em **Deploy**.
3. O arquivo `vercel.json` faz as rotas (`/leituras`, `/sobre`...) funcionarem ao recarregar a página.

## Uso de IA

Ver o arquivo [AI.md](./AI.md).

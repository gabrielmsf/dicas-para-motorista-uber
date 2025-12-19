0) Objetivo

Reativar o domínio dicasparamotoristauber.com.br como um site 100% estático, com tudo que vai ao ar dentro de public/, focando nas páginas que historicamente mais traziam tráfego:

Carros permitidos no UberX

Carros permitidos no Uber Black

Meta: voltar a gerar tráfego orgânico e, depois, monetizar (AdSense/afiliados/leads), sem depender de WordPress/back-end.

1) Princípios

Static-first: sem backend obrigatório.

Conteúdo orientado a dados: regras/listas em JSON (ou YAML) e páginas que exibem esses dados.

Atualização fácil: mudar dados + “last_updated” e publicar.

SEO e confiança: sempre exibir cidade/UF, data da última atualização, e fontes.

Sem “thin content”: cada página precisa entregar valor (contexto, regras, como confirmar no app, FAQ).

Monetização em fases: primeiro qualidade + tráfego; depois anúncios e afiliados.

2) Contrato do repositório
Regra principal

✅ Tudo que deve ser servido/publicado fica em: public/.

Estrutura alvo (primeiro commit e evolução)
/
  README.md
  plan.md
  public/
    index.html
    robots.txt
    sitemap.xml
    assets/
      styles.css
      app.js
    data/
      eligibilidade/
        uberx.sp.json
        black.sp.json
    carros/
      uberx/
        index.html
        sao-paulo-sp/index.html
      black/
        index.html
        sao-paulo-sp/index.html
    ferramentas/
      index.html
    sobre/
      index.html
    privacidade/
      index.html
    termos/
      index.html
    contato/
      index.html
3) Modelo de dados (o coração do projeto)

Cada dataset representa uma combinação de:

category: uberx | black (expansível)

location: sao-paulo-sp (expansível)

last_updated: YYYY-MM-DD

rules_summary: lista de regras resumidas (humanas e objetivas)

sources: lista de fontes (links oficiais ou referências confiáveis)

vehicles: lista opcional (se houver lista pública/confiável; caso não haja, manter como “exemplos” ou remover)

notes: avisos importantes (mudanças frequentes; confirmar no app)

Exemplo:

{
  "category": "uberx",
  "location": "sao-paulo-sp",
  "last_updated": "2025-12-13",
  "rules_summary": [
    "Guia prático — regras podem mudar; confirme no app.",
    "Ex.: 4 portas, ar-condicionado, bom estado geral."
  ],
  "sources": [
    { "label": "Fonte oficial (link)", "url": "https://..." }
  ],
  "vehicles": [
    { "make": "Toyota", "model": "Corolla", "years": "2016+", "trim": "", "notes": "" }
  ],
  "notes": [
    "Elegibilidade pode variar por cidade e política do app."
  ]
}

Regra de ouro: se a página afirmar “permitido”, deve exibir fontes + data e um aviso de que pode mudar.

4) Páginas (MVP)
Essenciais

/ (home com CTA para UberX/Black)

/carros/uberx/ (índice por cidade)

/carros/black/ (índice por cidade)

/carros/uberx/sao-paulo-sp/

/carros/black/sao-paulo-sp/

/privacidade/, /termos/, /sobre/, /contato/

/ferramentas/ (placeholder + roadmap)

Componentes que a página de “carros permitidos” precisa ter

Título SEO com categoria + cidade + “atualizado em”

Bloco “Última atualização”

Bloco “Regras resumidas”

Tabela (se existir lista) com filtro client-side

Fontes (links)

FAQ curta

Aviso: “confirme no app”

5) SEO (MVP realista)

robots.txt apontando para sitemap.xml

sitemap.xml com rotas principais

canonical por página

Performance: CSS leve, JS só onde precisa

Interlink: Home -> UberX/Black -> páginas de cidade; links cruzados (UberX <-> Black)

Evitar “thin content”: texto útil + FAQ + avisos + fontes

6) Monetização (fases)
Fase 1 — tráfego e qualidade

Publicar conteúdo base (UberX/Black SP) com fontes e data.

Criar páginas long tail complementares.

Fase 2 — AdSense + afiliados (com cuidado)

AdSense após estabilizar conteúdo

Afiliados:

dashcam

suporte de celular

carregadores

acessórios úteis

Leads (mais tarde): seguro, rastreador, locação (se fizer sentido)

7) Roadmap (proposto)

Datas são referência; ajuste quando executar.

Fase 0 — Diagnóstico e recuperação




Fase 1 — MVP estático no ar (este repo)




Fase 2 — “Credibilidade + SEO”




Fase 3 — Monetização inicial




Fase 4 — Ferramentas




Fase 5 — Expansão por cidade/UF




8) Agentes (playbook)
Agent A — Research & Fontes (prioridade #1)

Missão: achar requisitos atuais e fontes confiáveis por categoria/cidade.

Saída esperada

Atualizar sources[]

Ajustar rules_summary[]

Atualizar last_updated

Prompt (cole no agente):

“Pesquise as regras e critérios de elegibilidade de veículos para UberX e Uber Black em São Paulo. Retorne: regras resumidas, links de fontes (preferência oficial) e observações sobre variações. Se não existir lista oficial pública, declare isso e sugira o texto correto para a página (sem prometer).”

Agent B — Conteúdo (sem spam)

Missão: enriquecer a página com explicação curta e FAQ.

Saída esperada

Texto útil (curto e direto) para:

introdução

como confirmar no app

FAQ

aviso de mudanças

Prompt:

“Escreva um conteúdo curto, direto e honesto para a página ‘Carros permitidos no UberX — São Paulo’, incluindo FAQ e um bloco ‘como confirmar no app’. Não invente regras; quando não houver certeza, deixe explícito.”

Agent C — Frontend/UX

Missão: melhorar experiência, sem perder performance.

Saídas possíveis

Melhorar tabela e busca

Breadcrumbs

Schema FAQPage

Ajustar layout para mobile

Prompt:

“Melhore o HTML/CSS/JS do site estático mantendo tudo em public/. Priorize performance, acessibilidade e SEO (canonical, schema FAQ, breadcrumbs).”

Agent D — Deploy

Missão: publicar public/ com HTTPS.

Prompt:

“Dê instruções para publicar a pasta public/ no Coolify/Nginx como site estático, com cache de assets e HTTPS.”

9) Definition of Done (DoD)

public/ contém o site completo, pronto para ser servido.

Páginas UberX/Black SP exibem:

cidade/UF

data de atualização

regras resumidas

fontes

aviso de confirmação no app

robots + sitemap válidos

Sem links quebrados

Layout ok no mobile

10) Riscos

Regras mudam / lista não pública → focar em “como verificar no app” + fontes + data.

Thin content → sempre adicionar contexto/FAQ e não só “lista”.

AdSense reprovar → manter plano B (afiliados + ferramentas + leads).

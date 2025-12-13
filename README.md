# dicasparamotoristauber.com.br

Repositório do **dicasparamotoristauber.com.br**, reconstruído como **site 100% estático**.

✅ **Tudo que deve ser publicado/servido está em `public/`.**
O restante (README/plan) é documentação do projeto.

---

## Objetivo do site

Reativar as páginas que historicamente mais traziam tráfego e intenção:

* **Carros permitidos no UberX**
* **Carros permitidos no Uber Black**

E evoluir, com o tempo, para ferramentas (calculadoras) e monetização (AdSense/afiliados/leads).

---

## Estrutura do projeto

```
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
    ferramentas/index.html
    sobre/index.html
    privacidade/index.html
    termos/index.html
    contato/index.html
```

---

## Como publicar

Publique **apenas** a pasta `public/` em qualquer host de site estático (Coolify/Nginx/Cloudflare Pages/GitHub Pages com ajustes).

* Root do servidor = `public/`

---

## Como atualizar os dados (carros permitidos)

As páginas consomem datasets em JSON:

* `public/data/eligibilidade/uberx.sp.json`
* `public/data/eligibilidade/black.sp.json`

Atualize, no mínimo:

* `last_updated` (YYYY-MM-DD)
* `rules_summary` (regras resumidas, objetivas)
* `sources` (links oficiais/confiáveis)
* `notes` (avisos e limitações)

Opcional:

* `vehicles` (somente se houver base confiável; caso contrário, use como exemplos ou remova)

Depois, publique `public/` novamente.

---

## Importante (credibilidade)

Regras e elegibilidade mudam com frequência.

Boas práticas obrigatórias:

* mostrar **data de atualização**
* citar **fontes**
* evitar prometer certeza (“sempre permitido”)
* orientar o usuário a **confirmar no app** quando necessário

---

## Rotas principais

* Home: `/`
* UberX índice: `/carros/uberx/`
* UberX SP: `/carros/uberx/sao-paulo-sp/`
* Black índice: `/carros/black/`
* Black SP: `/carros/black/sao-paulo-sp/`

---

## Roadmap

Veja `plan.md`.

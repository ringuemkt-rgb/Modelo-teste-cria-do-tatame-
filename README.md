# 🦍🥋 Cria do Tatame — Modelo Profissional de Produção

Repositório base para construir o jogo **Cria do Tatame** com pipeline profissional de gameplay, dados, arte, sprites, IA de lore e validação.

> Meta: primeiro abrir, rodar, salvar, jogar e exportar. Depois polir arte, áudio e animação.

## Visão

**Cria do Tatame** é um RPG tático de Jiu-Jitsu Brasileiro com carreira, progressão semanal, combate posicional, reputação, Cria Live, facções, patrocinadores e mundo vivo inspirado no Baixo Sul da Bahia.

Protagonista canônico:

- **Ruan “Macacão” Silva**
- Símbolo: **Gorila Silverback**
- Estilo: pressão pesada, grip de ferro e top game dominante
- Especial: **Silverback Grip**

## Pipeline conectado

```txt
Godot 4.2+ / Web Prototype
        ↓
Data JSON validado
        ↓
Lore Guardian externo
        ↓
Arte e sprites por pipeline
        ↓
CI / QA / Build
        ↓
APK, Web e PC
```

## Estrutura do repositório

```txt
.
├── AGENTS.md
├── README.md
├── package.json
├── .github/workflows/ci.yml
├── docs/
│   ├── GDD.md
│   ├── TECH_STACK.md
│   ├── ART_PIPELINE.md
│   ├── LORE_GUARDIAN.md
│   ├── ROADMAP.md
│   └── QA_CHECKLIST.md
├── data/
│   ├── characters.json
│   ├── techniques.json
│   ├── missions.json
│   ├── arenas.json
│   ├── factions.json
│   ├── sponsors.json
│   └── cria_live_posts.json
├── schemas/
│   ├── character.schema.json
│   ├── technique.schema.json
│   └── mission.schema.json
├── tools/
│   ├── validate_json.mjs
│   ├── validate_game_data.mjs
│   └── generate_asset_manifest.mjs
├── art/
│   ├── STYLE_GUIDE.md
│   ├── prompts/
│   └── sprites/
└── prototype-web/
    ├── index.html
    ├── style.css
    └── main.js
```

## Scripts

```bash
npm run check:json
npm run check:data
npm run assets:manifest
npm run start:web
```

## Ferramentas integradas por função

| Área | Ferramenta | Uso |
|---|---|---|
| Engine oficial | Godot 4.2+ | jogo final, Android, PC e Web |
| Protótipo rápido | Web vanilla | validar loop sem peso |
| IA de lore | Hugging Face / Ollama / llama.cpp | gerar conteúdo fora do APK |
| RAG | bge-m3 + reranker | proteger canon e documentos |
| Sprites | Pixelorama / LibreSprite / Sprite Forge | criar e validar spritesheets |
| Arte 2.5D | Krita / Blender / prompts | concept, cards e UI |
| CI | GitHub Actions | validar JSON e estrutura |

## Regra de ouro da IA

A IA **não segura o gameplay nas costas**.

Ela cria e valida conteúdo. O jogo executa arquivos JSON estáveis, offline e testáveis.

## Próximo passo

1. Rodar validação JSON.
2. Abrir protótipo web.
3. Migrar loop validado para Godot.
4. Adicionar sprites e animações.
5. Exportar APK de teste.

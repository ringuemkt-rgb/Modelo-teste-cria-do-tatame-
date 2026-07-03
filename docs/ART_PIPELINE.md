# Pipeline de Arte e Gráficos

## Objetivo

Criar gráficos consistentes para o Cria do Tatame sem travar a produção.

## Direção visual

- Dark premium.
- Preto, dourado, bronze e branco sujo.
- Textura grunge controlada.
- UI técnica esportiva.
- Anatomia clara.
- Sprites com leitura forte.

## Pipeline de personagem

```txt
Ficha canônica → turnaround → pose base → spritesheet → QA de leitura → importação no jogo
```

## Sprites mínimos do MVP

Para cada lutador:

- idle
- guarda
- entrada no clinch
- queda
- passagem
- controle lateral
- montada
- reação
- vitória
- derrota

## Convenção de nomes

```txt
character_ruan_idle_000.png
character_ruan_idle_001.png
character_ruan_clinch_000.png
character_ruan_pass_000.png
```

## Critérios de aprovação

- Silhueta reconhecível.
- Leitura boa em tela pequena.
- Tamanho coerente com o personagem.
- Sem alteração de canon.
- Animação exportada em sequência ou atlas.

## Ferramentas recomendadas

- Pixelorama: sprites e animação pixel/2D.
- LibreSprite: spritesheets.
- Krita: pintura e concept.
- Blender: base 2.5D.
- Image prompts: concepts e cards.

## Manifesto de assets

O script `tools/generate_asset_manifest.mjs` cria uma lista de arquivos da pasta `art/` para controle de produção.

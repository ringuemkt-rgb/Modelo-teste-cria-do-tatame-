# Lore Guardian

## Função

Sistema externo de IA para criar, revisar e exportar conteúdo do Cria do Tatame.

## Regra principal

A IA não roda como obrigação dentro do jogo. Ela gera conteúdo para JSON. O jogo executa offline.

## Entradas

- Bíblia do canon.
- Lista de personagens.
- Técnicas.
- Arenas.
- Missões.
- Histórico de escolhas.

## Saídas

- `data/missions.json`
- `data/characters.json`
- `data/cria_live_posts.json`
- `data/factions.json`

## Validação

Todo conteúdo gerado deve passar por:

1. Checagem de campos obrigatórios.
2. Checagem de ids existentes.
3. Checagem de faixa mínima.
4. Checagem de coerência moral.
5. Checagem de canon.

## Modelos externos sugeridos

- Qwen para escrita.
- SmolLM para alternativa leve.
- bge-m3 para busca semântica.
- reranker para organizar contexto.

## Exemplo de fluxo

```txt
prompt de missão → resposta JSON → validação → exportação para data/ → teste no protótipo
```

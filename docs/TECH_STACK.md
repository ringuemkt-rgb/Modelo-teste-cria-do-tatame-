# Tech Stack

## Camada de jogo

### Oficial

- Godot 4.2 ou superior.
- GDScript tipado.
- Export para Android, Web e PC.

### Protótipo

- HTML, CSS e JavaScript puro.
- Sem dependência pesada.
- Serve para validar game loop antes da migração.

## Camada de dados

- JSON para personagens, técnicas, missões, arenas, facções e feed.
- Schemas para validação.
- Scripts Node para checagem automática.

## Camada de IA

- Hugging Face, Ollama ou llama.cpp fora do APK.
- Qwen ou SmolLM para escrita de lore.
- bge-m3 para busca semântica.
- Conteúdo gerado sempre validado antes de entrar em `data/`.

## Camada de arte

- Pixelorama ou LibreSprite para sprites.
- Krita para concept e pintura.
- Blender para base 2.5D quando necessário.
- Prompt bank para cards, UI e concepts.

## Camada de qualidade

- GitHub Actions.
- Validação JSON.
- Checklist de QA.
- Manifesto de assets.

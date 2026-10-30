# Jogo da Memória Simplificado

**Descritivo:** Uma versão reduzida do jogo tradicional, começando com apenas 2 pares de cartas (4 cartas no total) focadas em ilustrações de objetos familiares.

**Objetivo Pedagógico:** Memória de curto prazo, foco atencional e observação de detalhes.

**Descrição de Cores:**
- Fundo: Azul escuro (galáxia) ou texturizado.
- Verso das cartas: Padrões simples, como estrelas brilhantes em amarelo sobre fundo roxo.
- Frente das cartas: Fundo branco para destacar os desenhos super coloridos.

**Referências de Layout:** 
- Grade 2x2.
- A transição deve utilizar `transform: rotateY()` no CSS para o efeito perfeito de virada de carta em 3D.

**Regras:**
- O jogo inicia com 4 cartas viradas para baixo.
- Tocar em uma carta a vira; tocar na segunda encerra a tentativa.
- Se forem iguais, brilham e não podem mais ser viradas.
- Se forem diferentes, o jogo aguarda 1 segundo e desvira as duas automaticamente.

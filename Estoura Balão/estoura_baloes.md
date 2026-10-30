# Estoura Balões de Cores e Números

**Descritivo:** Jogo simples e interativo onde balões coloridos sobem pela tela e a criança deve tocá-los para estourar.

**Objetivo Pedagógico:** Desenvolver a coordenação olho-mão, tempo de reação e o reconhecimento visual/auditivo de cores.

**Descrição de Cores:**
- Fundo: Azul claro suave (relembrando o céu, ex: `#E9F8FF`).
- Balões: Cores primárias e secundárias vibrantes (Vermelho `#FF3B30`, Azul `#007AFF`, Amarelo `#FFCC00`, Verde `#34C759`).

**Referências de Layout:** 
- Tela inteira (usando `height: 100dvh`), sem barra de rolagem. 
- Balões desenhados nativamente em SVG com animações fluidas em CSS (`transform: translateY`).

**Regras:**
- Os balões surgem aleatoriamente na base da tela e sobem lentamente.
- Tocar no balão faz com que ele desapareça imediatamente com uma animação de "estouro" e som agradável de "pop".
- Não há limite de tempo, penalidade ou "game over".

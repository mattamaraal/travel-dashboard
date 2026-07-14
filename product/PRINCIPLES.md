# Product Principles

Todos os desenvolvimentos do Travel OS devem respeitar estes princípios.

Caso uma nova funcionalidade viole um deles, ela deve ser reavaliada.

---

# 1. O Dashboard é somente leitura

O Dashboard existe para apresentar informações.

Nunca para editar dados.

Toda edição acontece em módulos específicos.

---

# 2. Existe uma única fonte da verdade

Cada informação possui apenas um local oficial.

Exemplos:

Datas → Trip

Orçamento → Budget

Reservas → Reservations

Despesas → Expenses

Evitar duplicação de informações.

---

# 3. Menos é melhor

Sempre preferir uma interface limpa.

Mostrar apenas informações relevantes.

Evitar excesso de gráficos, tabelas ou indicadores.

---

# 4. A interface deve parecer um produto

O usuário nunca deve sentir que está utilizando uma planilha.

Cards.

Espaçamento.

Hierarquia visual.

Componentes reutilizáveis.

---

# 5. Automatizar sempre que possível

O usuário não deve executar tarefas repetitivas.

Exemplos:

Atualização de câmbio.

Cálculo de orçamento.

Countdown.

Resumo financeiro.

---

# 6. Uma ação deve acontecer apenas uma vez

Se uma informação já foi cadastrada, ela deve ser reutilizada em todo o sistema.

Exemplo:

Datas da viagem.

Nunca perguntar novamente.

---

# 7. Cada módulo possui uma responsabilidade

Trip

Exchange

Budget

Expenses

Reservations

Checklist

Timeline

Cada módulo possui seu próprio Repository, Service e UI.

---

# 8. O sistema cresce junto com a viagem

O Dashboard muda conforme a fase da viagem.

Planejamento.

Reservas.

Preparação.

Viagem.

Retorno.

As informações mais importantes mudam ao longo do tempo.

---

# 9. A experiência é mais importante que a quantidade de funcionalidades

Uma funcionalidade excelente vale mais do que cinco funcionalidades medianas.

Sempre priorizar simplicidade.

---

# 10. Tudo deve poder ser recriado

O layout da aplicação deve ser gerado por código.

Nenhuma configuração manual deve ser obrigatória.

Todo o sistema deve ser inicializável através do processo de instalação.

---

# 11. Dados primeiro, interface depois

Toda funcionalidade nasce da modelagem dos dados.

A interface apenas apresenta essas informações.

Nunca desenvolver uma tela antes de entender quais dados ela representa.

---

# 12. Pensar em escala, implementar o necessário

O projeto deve ser arquitetado considerando múltiplas viagens.

Porém, implementar apenas o que entrega valor imediato.

Evitar complexidade prematura.

---

# Pergunta de ouro

Antes de implementar qualquer funcionalidade, responder:

> Esta funcionalidade torna o planejamento de uma viagem mais simples, agradável ou confiável?

Se a resposta for não, ela provavelmente não pertence ao produto.
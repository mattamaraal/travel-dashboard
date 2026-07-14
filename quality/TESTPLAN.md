# Test Plan

| Projeto | Travel Dashboard |
|----------|------------------|
| Versão | 0.2.0 |
| Status | In Development |

---

# Objetivo

Garantir que todas as funcionalidades da aplicação estejam operando corretamente antes de cada release.

Este documento define:

- funcionalidades existentes;
- cobertura de testes;
- critérios de aprovação;
- funcionalidades pendentes.

---

# Escopo

## Incluído

- Core
- Exchange Module
- App Module

## Fora do escopo

- Budget
- Expenses
- Reservations
- Countdown

---

# Estratégia

Os testes são divididos por módulo.

```
Core

Exchange

App
```

Cada módulo possui testes independentes.

Os testes são executados através do TestRunner.

```
runAllTests()
```

ou

```
runCoreTests()

runExchangeTests()

runAppTests()
```

---

# Casos de Teste

## Core

| ID | Caso | Status |
|----|------|--------|
| CORE-001 | Config carregada | ☐ |
| CORE-002 | Dashboard existe | ☐ |
| CORE-003 | Histórico existe | ☐ |
| CORE-004 | Named Ranges existem | ☐ |

---

## Exchange Provider

| ID | Caso | Status |
|----|------|--------|
| EX-PROV-001 | Provider disponível | ☐ |
| EX-PROV-002 | Resposta válida | ☐ |
| EX-PROV-003 | HTTP diferente de 200 | ☐ |
| EX-PROV-004 | Payload inválido | ☐ |

---

## Exchange Repository

| ID | Caso | Status |
|----|------|--------|
| EX-REP-001 | Salvar cache | ☐ |
| EX-REP-002 | Ler cache | ☐ |
| EX-REP-003 | Limpar cache | ☐ |
| EX-REP-004 | Gravar histórico | ☐ |
| EX-REP-005 | Recuperar histórico | ☐ |
| EX-REP-006 | Estatísticas | ☐ |

---

## Exchange Service

| ID | Caso | Status |
|----|------|--------|
| EX-SRV-001 | Cache Hit | ☐ |
| EX-SRV-002 | Cache Miss | ☐ |
| EX-SRV-003 | Refresh | ☐ |
| EX-SRV-004 | Estatísticas | ☐ |
| EX-SRV-005 | Variação diária | ☐ |

---

## Exchange Widget

| ID | Caso | Status |
|----|------|--------|
| EX-WGT-001 | Atualizar dashboard | ☐ |
| EX-WGT-002 | Atualizar named ranges | ☐ |
| EX-WGT-003 | Toast | ☐ |

---

## Bootstrap

| ID | Caso | Status |
|----|------|--------|
| APP-001 | Inicialização | ☐ |
| APP-002 | Verificar instalação | ☐ |
| APP-003 | Instalar trigger | ☐ |
| APP-004 | Remover trigger | ☐ |

---

# Testes Manuais

Antes de toda release:

- [ ] Executar `runAllTests()`
- [ ] Executar `updateDashboard()`
- [ ] Executar `forceRefreshDashboard()`
- [ ] Validar atualização da cotação
- [ ] Validar histórico
- [ ] Validar atualização do dashboard
- [ ] Validar trigger
- [ ] Verificar logs
- [ ] Confirmar ausência de exceções

---

# Critérios de Aprovação

Uma release somente pode ser publicada quando:

- Todos os testes automatizados passarem;
- Nenhuma exceção for encontrada;
- Dashboard atualizado corretamente;
- Cobertura dos módulos existentes estiver completa;
- README e CHANGELOG estiverem atualizados.

---

# Cobertura Atual

| Módulo | Cobertura |
|---------|----------:|
| Core | 0% |
| Exchange | 0% |
| App | 0% |

---

# Pendências

## v0.3.0

- Testes de Budget
- Mock do Provider
- Testes de Performance
- Testes de Integração
- Testes de Regressão

---

# Histórico

## v0.2.0

Documento criado.
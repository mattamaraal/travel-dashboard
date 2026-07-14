# Desenvolvimento

## Convenções

Um arquivo = um módulo.

Exemplo.

```
ExchangeService

ExchangeProvider

ExchangeRepository
```

## Regras

Nenhum módulo acessa diretamente:

- SpreadsheetApp
- CacheService
- UrlFetchApp

Exceto:

Sheets

ExchangeRepository

ExchangeProvider

## Fluxo

Widget

↓

Service

↓

Repository

↓

Sheets
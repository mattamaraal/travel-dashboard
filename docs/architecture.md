# Arquitetura

O projeto segue uma arquitetura em camadas.

```
          UI
           │
           ▼
      ExchangeWidget
           │
           ▼
      ExchangeService
      │            │
      ▼            ▼
ExchangeProvider ExchangeRepository
                     │
             ┌───────┴────────┐
             ▼                ▼
        CacheService      Google Sheets
```

## Responsabilidades

### Widget

Responsável apenas pela renderização.

Nunca:

- consulta APIs
- acessa cache
- faz cálculos

---

### Service

Responsável pela regra de negócio.

---

### Repository

Responsável por persistência.

---

### Provider

Responsável pela integração externa.
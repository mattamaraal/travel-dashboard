/**
 * ============================================================================
 * Dashboard
 * ============================================================================
 *
 * Definição declarativa da Dashboard principal.
 *
 * Este arquivo NÃO desenha nada.
 * Apenas descreve quais componentes existem.
 * ============================================================================
 */

const Dashboard = Object.freeze({

  COMPONENTS: [

    {
      id: "exchange",

      type: "metric",

      area: Grid.AREAS.EXCHANGE_CARD,

      title: "Exchange",

      icon: Theme.ICONS.EXCHANGE,

      bindings: {

        value: Config.RANGES.EXCHANGE_VALUE,

        subtitle: Config.RANGES.EXCHANGE_DAILY_CHANGE

      }

    },

    {
      id: "budget",

      type: "metric",

      area: Grid.AREAS.BUDGET_CARD,

      title: "Budget",

      icon: Theme.ICONS.BUDGET,

      bindings: {

        value: "ui_budget_total",

        subtitle: "ui_budget_remaining"

      }

    },

    {
      id: "expenses",

      type: "metric",

      area: Grid.AREAS.EXPENSE_CARD,

      title: "Expenses",

      icon: Theme.ICONS.EXPENSES,

      bindings: {

        value: "ui_expenses_total",

        subtitle: "ui_expenses_count"

      }

    },

    {
      id: "countdown",

      type: ComponentTypes.METRIC,

      area: Grid.AREAS.COUNTDOWN_CARD,

      title: "Countdown",

      icon: Theme.ICONS.TRIP,

      bindings: {

        value: "ui_trip_countdown",

        subtitle: "ui_trip_dates"

      }

    }

  ]

});
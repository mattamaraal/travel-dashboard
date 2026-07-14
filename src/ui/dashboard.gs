/**
 * ============================================================================
 * Dashboard
 * ============================================================================
 */

const Dashboard = (() => {
  /**
   * Retorna a definição da Dashboard.
   *
   * @returns {Object[]}
   */
  function components() {
    return [
      {
        id: 'exchange',

        type: ComponentTypes.METRIC,

        area: Grid.AREAS.EXCHANGE_CARD,

        title: 'Exchange',

        icon: Theme.ICONS.EXCHANGE,

        bindings: {
          value: Config.RANGES.EXCHANGE_VALUE,

          subtitle: Config.RANGES.EXCHANGE_DAILY_CHANGE,
        },
      },

      {
        id: 'budget',

        type: ComponentTypes.METRIC,

        area: Grid.AREAS.BUDGET_CARD,

        title: 'Budget',

        icon: Theme.ICONS.BUDGET,

        bindings: {
          value: 'ui_budget_total',

          subtitle: 'ui_budget_remaining',
        },
      },

      {
        id: 'expenses',

        type: ComponentTypes.METRIC,

        area: Grid.AREAS.EXPENSE_CARD,

        title: 'Expenses',

        icon: Theme.ICONS.EXPENSES,

        bindings: {
          value: 'ui_expenses_total',

          subtitle: 'ui_expenses_count',
        },
      },

      {
        id: 'countdown',

        type: ComponentTypes.METRIC,

        area: Grid.AREAS.COUNTDOWN_CARD,

        title: 'Countdown',

        icon: Theme.ICONS.TRIP,

        bindings: {
          value: 'ui_trip_countdown',

          subtitle: 'ui_trip_dates',
        },
      },
    ];
  }

  return {
    components,
  };
})();

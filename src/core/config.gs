/**
 * ============================================================================
 * Configuration
 * ============================================================================
 */

const Config = Object.freeze({

  API: Object.freeze({

    PROVIDER: 'FRANKFURTER',

    PROVIDERS: Object.freeze({

      FRANKFURTER: 'FRANKFURTER'

    }),

    CACHE_TIME_SECONDS: 60 * 30

  }),

  SHEETS: Object.freeze({

    DASHBOARD: 'Dashboard',

    HISTORY: 'Histórico Câmbio'

  }),

  RANGES: {

    EXCHANGE_VALUE: "ui_exchange_value",

    EXCHANGE_UPDATED_AT: "ui_exchange_updated_at",

    EXCHANGE_HIGH: "ui_exchange_high",

    EXCHANGE_LOW: "ui_exchange_low",

    EXCHANGE_AVERAGE: "ui_exchange_average",

    EXCHANGE_DAILY_CHANGE: "ui_exchange_daily_change"

}

});
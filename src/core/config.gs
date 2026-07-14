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

  RANGES: Object.freeze({

    EXCHANGE_RATE: 'exchange_rate',

    LAST_UPDATE: 'exchange_last_update',

    DAILY_CHANGE: 'exchange_daily_change',

    HIGH_RATE: 'exchange_high_rate',

    LOW_RATE: 'exchange_low_rate',

    AVERAGE_RATE: 'exchange_average_rate'

  })

});
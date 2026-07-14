/**
 * ============================================================================
 * Exchange Repository
 * ============================================================================
 *
 * Responsabilidade:
 * Persistência de dados do módulo de câmbio.
 *
 * Este módulo encapsula:
 *
 *  - CacheService
 *  - Planilha de Histórico
 *
 * Nenhum outro módulo deve acessar essas APIs diretamente.
 * ============================================================================
 */

const ExchangeRepository = (() => {

  const CACHE_KEY = 'exchange.current';

  const COLUMNS = Object.freeze({
    DATE: 1,
    RATE: 2,
    SOURCE: 3
  });

  /**
   * Retorna a cotação armazenada em cache.
   *
   * @returns {ExchangeRate|null}
   */
  function getCurrent() {

    const cache = CacheService.getDocumentCache();

    const value = cache.get(CACHE_KEY);

    if (!value) {
      return null;
    }

    /** @type {ExchangeRate} */
    const exchange = JSON.parse(value);

    exchange.updatedAt = new Date(exchange.updatedAt);

    return exchange;

  }

  /**
   * Salva a cotação no cache.
   *
   * @param {ExchangeRate} exchange
   */
  function saveCurrent(exchange) {

    CacheService
      .getDocumentCache()
      .put(
        CACHE_KEY,
        JSON.stringify(exchange),
        Config.API.CACHE_TIME_SECONDS
      );

  }

  /**
   * Remove a cotação do cache.
   */
  function clearCurrent() {

    CacheService
      .getDocumentCache()
      .remove(CACHE_KEY);

  }

  /**
   * Retorna toda a tabela de histórico.
   *
   * @returns {ExchangeRate[]}
   */
  function getHistory() {

    const sheet =
      Sheets.getSheet(
        Config.SHEETS.HISTORY
      );

    const lastRow = sheet.getLastRow();

    if (lastRow <= 1) {
      return [];
    }

    const values = sheet
      .getRange(
        2,
        1,
        lastRow - 1,
        3
      )
      .getValues();

    return values.map(row => ({

      updatedAt: row[0],

      rate: Number(row[1]),

      source: row[2]

    }));

  }

  /**
   * Acrescenta uma nova cotação.
   *
   * @param {ExchangeRate} exchange
   */
  function appendHistory(exchange) {

    const sheet =
      Sheets.getSheet(
        Config.SHEETS.HISTORY
      );

    sheet.appendRow([
      exchange.updatedAt,
      exchange.rate,
      exchange.source
    ]);

  }

  /**
   * Limpa o histórico.
   *
   * Utilizado apenas em testes.
   */
  function clearHistory() {

    const sheet =
      Sheets.getSheet(
        Config.SHEETS.HISTORY
      );

    const lastRow = sheet.getLastRow();

    if (lastRow <= 1) {
      return;
    }

    sheet
      .getRange(
        2,
        1,
        lastRow - 1,
        3
      )
      .clearContent();

  }

  /**
   * Retorna a última cotação gravada.
   *
   * @returns {ExchangeRate|null}
   */
  function getLast() {

    const history = getHistory();

    if (history.length === 0) {
      return null;
    }

    return history[history.length - 1];

  }

  /**
   * Verifica se a cotação mudou.
   *
   * @param {ExchangeRate} exchange
   *
   * @returns {boolean}
   */
  function hasChanged(exchange) {

    const last = getLast();

    if (!last) {
      return true;
    }

    return last.rate !== exchange.rate;

  }

  /**
   * Retorna estatísticas do histórico.
   *
   * Apenas UMA leitura da planilha.
   */
  function getStatistics() {

    const history = getHistory();

    const rates = history.map(item => item.rate);

    if (rates.length === 0) {

      return {

        history,

        highest: null,

        lowest: null,

        average: null,

        previous: null

      };

    }

    const average =
      rates.reduce(
        (sum, value) => sum + value,
        0
      ) / rates.length;

    return {

      history,

      highest: Math.max(...rates),

      lowest: Math.min(...rates),

      average,

      previous:
        history.length >= 2
          ? history[history.length - 2]
          : null

    };

  }

  /**
   * Remove todos os dados do módulo.
   */
  function reset() {

    clearCurrent();

    clearHistory();

  }

  return {

    getCurrent,

    saveCurrent,

    clearCurrent,

    getHistory,

    appendHistory,

    clearHistory,

    getLast,

    hasChanged,

    getStatistics,

    reset

  };

})();
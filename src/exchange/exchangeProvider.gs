/**
 * ============================================================================
 * Exchange Provider
 * ============================================================================
 *
 * Responsabilidade:
 * Buscar dados de provedores externos de câmbio.
 *
 * Este módulo NÃO conhece:
 *  - Cache
 *  - Sheets
 *  - Histórico
 *
 * Apenas retorna um objeto ExchangeRate.
 * ============================================================================
 */

/**
 * @typedef {Object} ExchangeRate
 *
 * @property {number} rate
 * @property {Date} updatedAt
 * @property {string} source
 */

const ExchangeProvider = (() => {

  /**
   * Busca a cotação utilizando o provider configurado.
   *
   * @returns {ExchangeRate}
   */
  function fetch() {

    switch (Config.API.PROVIDER) {

      case Config.API.PROVIDERS.FRANKFURTER:
        return fetchFrankfurter();

      default:
        throw new Error(
          `Unsupported provider '${Config.API.PROVIDER}'.`
        );

    }

  }

  /**
   * Provider Frankfurter.
   *
   * https://www.frankfurter.app
   *
   * @returns {ExchangeRate}
   */
  function fetchFrankfurter() {

    Logger.info(
      'Fetching exchange rate from Frankfurter...'
    );

    const response = UrlFetchApp.fetch(
      'https://api.frankfurter.app/latest?from=EUR&to=BRL',
      {
        muteHttpExceptions: true
      }
    );

    validateResponse(response);

    const json = JSON.parse(
      response.getContentText()
    );

    validatePayload(json);

    return {

      rate: Number(json.rates.BRL),

      updatedAt: new Date(),

      source: 'Frankfurter'

    };

  }

  /**
   * Valida resposta HTTP.
   *
   * @param {GoogleAppsScript.URL_Fetch.HTTPResponse} response
   */
  function validateResponse(response) {

    const status = response.getResponseCode();

    if (status !== 200) {

      throw new Error(
        `Provider returned HTTP ${status}.`
      );

    }

  }

  /**
   * Valida payload recebido.
   *
   * @param {Object} payload
   */
  function validatePayload(payload) {

    if (!payload) {

      throw new Error(
        'Provider returned an empty payload.'
      );

    }

    if (!payload.rates) {

      throw new Error(
        'Payload does not contain "rates".'
      );

    }

    if (payload.rates.BRL === undefined) {

      throw new Error(
        'Payload does not contain BRL rate.'
      );

    }

    if (isNaN(payload.rates.BRL)) {

      throw new Error(
        'Provider returned an invalid exchange rate.'
      );

    }

  }

  /**
   * Verifica se o provider está acessível.
   *
   * Utilizado durante bootstrap e testes.
   *
   * @returns {boolean}
   */
  function isAvailable() {

    try {

      fetch();

      return true;

    }

    catch (error) {

      Logger.error(error);

      return false;

    }

  }

  return {

    fetch,

    isAvailable

  };

})();
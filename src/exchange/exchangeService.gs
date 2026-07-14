/**
 * ============================================================================
 * Exchange Service
 * ============================================================================
 *
 * Responsabilidade:
 * Centralizar toda a regra de negócio relacionada ao câmbio.
 *
 * Este módulo NÃO conhece:
 *  - Google Sheets
 *  - CacheService
 *  - APIs externas
 *
 * Apenas conversa com:
 *  - ExchangeProvider
 *  - ExchangeRepository
 * ============================================================================
 */

const ExchangeService = (() => {

  /**
   * Obtém a cotação atual.
   *
   * Utiliza cache quando disponível.
   *
   * @returns {{
   *   exchange: ExchangeRate,
   *   fromCache: boolean
   * }}
   */
  function getCurrent() {

    const cached =
      ExchangeRepository.getCurrent();

    if (cached) {

      Logger.info(
        "Exchange rate loaded from cache."
      );

      return {

        exchange: cached,

        fromCache: true

      };

    }

    Logger.info(
      "Fetching exchange rate from provider."
    );

    const exchange =
      ExchangeProvider.fetch();

    ExchangeRepository.saveCurrent(exchange);

    if (
      ExchangeRepository.hasChanged(exchange)
    ) {

      ExchangeRepository.appendHistory(
        exchange
      );

    }

    return {

      exchange,

      fromCache: false

    };

  }

  /**
   * Força atualização ignorando cache.
   *
   * @returns {ExchangeRate}
   */
  function refresh() {

    Logger.info(
      "Refreshing exchange rate."
    );

    ExchangeRepository.clearCurrent();

    const exchange =
      ExchangeProvider.fetch();

    ExchangeRepository.saveCurrent(exchange);

    if (
      ExchangeRepository.hasChanged(exchange)
    ) {

      ExchangeRepository.appendHistory(
        exchange
      );

    }

    return exchange;

  }

  /**
   * Retorna todas as estatísticas utilizadas
   * pelo Widget.
   *
   * Apenas UMA leitura do histórico.
   *
   * @returns {Object}
   */
  function getStatistics() {

    const currentResult =
      getCurrent();

    const stats =
      ExchangeRepository.getStatistics();

    let variation = null;

    if (stats.previous) {

      variation =
        (
          currentResult.exchange.rate -
          stats.previous.rate
        ) / stats.previous.rate;

    }

    return {

      current:
        currentResult.exchange,

      previous:
        stats.previous,

      highest:
        stats.highest,

      lowest:
        stats.lowest,

      average:
        stats.average,

      dailyVariation:
        variation,

      historyLength:
        stats.history.length,

      fromCache:
        currentResult.fromCache

    };

  }

  /**
   * Limpa apenas o cache.
   */
  function clearCache() {

    ExchangeRepository.clearCurrent();

  }

  /**
   * Reinicia completamente o módulo.
   *
   * Utilizado apenas em testes.
   */
  function reset() {

    ExchangeRepository.reset();

  }

  /**
   * Informações úteis para debug.
   *
   * @returns {Object}
   */
  function getDebugInfo() {

    const repository =
      ExchangeRepository.getStatistics();

    return {

      provider:
        Config.API.PROVIDER,

      historyEntries:
        repository.history.length,

      highest:
        repository.highest,

      lowest:
        repository.lowest,

      average:
        repository.average,

      last:
        ExchangeRepository.getLast()

    };

  }

  return {

    getCurrent,

    refresh,

    getStatistics,

    clearCache,

    reset,

    getDebugInfo

  };

})();
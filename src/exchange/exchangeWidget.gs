/**
 * ============================================================================
 * Exchange Widget
 * ============================================================================
 *
 * Responsabilidade:
 * Renderizar os dados do módulo de câmbio no dashboard.
 *
 * Este módulo NÃO contém regra de negócio.
 * Toda informação deve ser obtida através do ExchangeService.
 * ============================================================================
 */

const ExchangeWidget = (() => {

  /**
   * Atualiza completamente o widget.
   */
  function update() {

    Logger.info("Updating Exchange Widget...");

    const statistics = ExchangeService.getStatistics();

    render(statistics);

    showUpdateToast(statistics.fromCache);

  }

  /**
   * Escreve todos os valores do widget.
   *
   * @param {Object} statistics
   */
  function render(statistics) {

    const values = {};

    values[Config.RANGES.EXCHANGE_VALUE] =
      statistics.current.rate;

    values[Config.RANGES.EXCHANGE_UPDATED_AT] =
      statistics.current.updatedAt;

    values[Config.RANGES.EXCHANGE_HIGH] =
      statistics.highest;

    values[Config.RANGES.EXCHANGE_LOW] =
      statistics.lowest;

    values[Config.RANGES.EXCHANGE_AVERAGE] =
      statistics.average;

    values[Config.RANGES.EXCHANGE_DAILY_CHANGE] =
      statistics.dailyVariation ?? 0;

    Object.entries(values)
      .forEach(([namedRange, value]) => {

        Sheets
          .getNamedRange(namedRange)
          .setValue(value);

      });

  }

  /**
   * Exibe mensagem de atualização.
   *
   * @param {boolean} fromCache
   */
  function showUpdateToast(fromCache) {

    const source =
      fromCache
        ? "cache"
        : "provider";

    Sheets.toast(
      `Exchange atualizado (${source}).`
    );

  }

  /**
   * Limpa o widget.
   *
   * Utilizado apenas em testes.
   */
  function clear() {

    const ranges = [

      Config.RANGES.EXCHANGE_VALUE,

      Config.RANGES.EXCHANGE_UPDATED_AT,

      Config.RANGES.EXCHANGE_HIGH,

      Config.RANGES.EXCHANGE_LOW,

      Config.RANGES.EXCHANGE_AVERAGE,

      Config.RANGES.EXCHANGE_DAILY_CHANGE

    ];

    ranges.forEach(range => {

      Sheets
        .getNamedRange(range)
        .clearContent();

    });

  }

  return {

    update,

    clear

  };

})();
/**
 * Atualiza os indicadores do Dashboard.
 *
 * @param {ExchangeRate} exchange
 */
function updateDashboardValues(exchange) {

  getNamedRange(CONFIG.RANGES.EXCHANGE_RATE)
    .setValue(exchange.rate);

  getNamedRange(CONFIG.RANGES.LAST_UPDATE)
    .setValue(exchange.updatedAt);

}
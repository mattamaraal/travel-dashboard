/**
 * Obtém a cotação do euro.
 *
 * @returns {{
 * exchange: ExchangeRate,
 * fromCache:boolean
 * }}
 */
function getExchangeRate() {

  const cached = getCachedExchangeRate();

  if (cached) {

    logInfo("Usando cache.");

    return {

      exchange: cached,

      fromCache: true

    };

  }

  logInfo("Consultando provider.");

  const exchange = fetchExchangeRate();

  saveExchangeRateCache(exchange);

  return {

    exchange,

    fromCache: false

  };

}
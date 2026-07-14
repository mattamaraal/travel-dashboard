const CACHE_KEY = "exchange_rate";
function getCachedExchangeRate() {

  const cache = CacheService.getDocumentCache();

  const cached = cache.get(CACHE_KEY);

  if (!cached)
    return null;

  const exchange = JSON.parse(cached);

  exchange.updatedAt = new Date(exchange.updatedAt);

  return exchange;

}
function saveExchangeRateCache(exchange) {

  CacheService

    .getDocumentCache()

    .put(

      CACHE_KEY,

      JSON.stringify(exchange),

      CONFIG.API.CACHE_TIME_SECONDS

    );

}
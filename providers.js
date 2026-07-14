/**
 * Busca uma cotação utilizando o provider configurado.
 *
 * @returns {ExchangeRate}
 */
function fetchExchangeRate() {

  switch (CONFIG.API.PROVIDER) {

    case "FRANKFURTER":
      return fetchFrankfurter();

    default:
      throw new Error("Provider inválido.");

  }

}

/**
 * Frankfurter API
 *
 * @returns {ExchangeRate}
 */
function fetchFrankfurter() {

  const response = UrlFetchApp.fetch(
    "https://api.frankfurter.app/latest?from=EUR&to=BRL"
  );

  const json = JSON.parse(
    response.getContentText()
  );

  return createExchangeRate({

    rate: json.rates.BRL,

    updatedAt: new Date(),

    source: "Frankfurter"

});

}
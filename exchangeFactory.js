/**
 * @typedef {Object} ExchangeRate
 * @property {number} rate
 * @property {Date} updatedAt
 * @property {string} source
 * @property {Date} fetchedAt
 */

/**
 * Normaliza qualquer resposta de provider.
 *
 * @param {{
 * rate:number,
 * updatedAt:Date|string,
 * source:string
 * }} data
 *
 * @returns {ExchangeRate}
 */
function createExchangeRate(data) {

  return {

    rate: Number(data.rate),

    updatedAt: new Date(data.updatedAt),

    source: data.source,

    fetchedAt: new Date()

  };

}
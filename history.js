function appendExchangeHistory(exchange) {

  const sheet = getSheet(CONFIG.SHEETS.HISTORY);

  const row = sheet.getLastRow() + 1;

  sheet

    .getRange(row, 1, 1, 2)

    .setValues([

      [

        exchange.updatedAt,

        exchange.rate

      ]

    ]);

}
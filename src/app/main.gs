/**
 * ============================================================================
 * Main Application
 * ============================================================================
 *
 * Entry point da aplicação.
 *
 * Responsabilidades:
 *  - Orquestrar widgets
 *  - Tratar erros globais
 *  - Exibir feedback ao usuário
 *
 * Nenhuma regra de negócio deve existir aqui.
 * ============================================================================
 */

/**
 * Atualiza todo o dashboard.
 */
function updateDashboard() {

  Logger.info("Starting dashboard update...");

  const startedAt = Date.now();

  try {

    updateWidgets();

    const elapsed =
      ((Date.now() - startedAt) / 1000).toFixed(2);

    Logger.info(
      `Dashboard updated in ${elapsed}s`
    );

    Sheets.toast(
      `Dashboard atualizado (${elapsed}s)`
    );

  }

  catch (error) {

    Logger.error(error);

    Sheets.alert(
      "Erro",
      error.message
    );

  }

}

/**
 * Atualiza todos os widgets.
 *
 * A ordem importa.
 */
function updateWidgets() {

  ExchangeWidget.update();

}

/**
 * Atualiza apenas o widget de câmbio.
 */
function updateExchangeOnly() {

  try {

    ExchangeWidget.update();

  }

  catch (error) {

    Logger.error(error);

    Sheets.alert(
      "Erro",
      error.message
    );

  }

}

/**
 * Ignora cache e busca nova cotação.
 */
function forceRefreshDashboard() {

  try {

    ExchangeService.refresh();

    ExchangeWidget.update();

  }

  catch (error) {

    Logger.error(error);

    Sheets.alert(
      "Erro",
      error.message
    );

  }

}
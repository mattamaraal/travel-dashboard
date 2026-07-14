function updateDashboard() {

  try {

    logInfo("Atualizando dashboard.");

    const result = getExchangeRate();

    updateDashboardValues(result.exchange);

    if (!result.fromCache) {

      appendExchangeHistory(result.exchange);

    }

    showToast(

      "Dashboard atualizado."

    );

  }

  catch (error) {

    logError(error);

    showAlert(

      "Erro",

      error.message

    );

  }

}
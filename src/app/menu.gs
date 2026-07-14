/**
 * ============================================================================
 * Menu
 * ============================================================================
 */

function onOpen() {

  SpreadsheetApp.getUi()

    .createMenu("✈️ Travel Dashboard")

    .addItem(
      "Atualizar Dashboard",
      "updateDashboard"
    )

    .addSeparator()

    .addItem(
      "Atualizar Câmbio",
      "updateExchangeOnly"
    )

    .addItem(
      "Forçar Atualização",
      "forceRefreshDashboard"
    )

    .addSeparator()

    .addItem(
      "Inicializar Projeto",
      "initializeApplication"
    )

    .addItem(
      "Verificar Instalação",
      "verifyInstallation"
    )

    .addSeparator()

    .addItem(
      "Instalar Atualização Automática",
      "installTriggers"
    )

    .addItem(
      "Remover Atualização Automática",
      "removeTriggers"
    )

    .addSeparator()

    .addItem(
      "Sobre",
      "showAbout"

    )

    .addToUi();

}

function showAbout() {

  Sheets.alert(

    "Travel Dashboard",

    [
      "Travel Dashboard",

      "",

      "Versão 0.2.0",

      "",

      "Google Sheets + Apps Script",

      "© 2026"

    ].join("\n")

  );

}
function onOpen() {

  SpreadsheetApp.getUi()

    .createMenu("✈️ Viagem")

    .addItem(

      "Atualizar Dashboard",

      "updateDashboard"

    )

    .addSeparator()

    .addItem(

      "Sobre",

      "showAbout"

    )

    .addToUi();

}

function showAbout() {

  showAlert(

    "Travel Dashboard",

    "Projeto desenvolvido em Apps Script."

  );

}
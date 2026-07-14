function getSheet(name) {

  return SpreadsheetApp

    .getActiveSpreadsheet()

    .getSheetByName(name);

}
function showAlert(title, message) {

  SpreadsheetApp

    .getUi()

    .alert(

      title,

      message,

      SpreadsheetApp.getUi().ButtonSet.OK

    );

}
function logInfo(message) {

  console.log("[INFO] " + message);

}
function logError(error) {

  console.error(error);

}
function showToast(message) {

  SpreadsheetApp

    .getActiveSpreadsheet()

    .toast(message);

}
/**
 * Retorna um intervalo nomeado.
 *
 * @param {string} name
 * @returns {GoogleAppsScript.Spreadsheet.Range}
 */
function getNamedRange(name) {

  const range = SpreadsheetApp
    .getActiveSpreadsheet()
    .getRangeByName(name);

  if (!range) {
    throw new Error(`Named Range '${name}' não encontrado.`);
  }

  return range;

}
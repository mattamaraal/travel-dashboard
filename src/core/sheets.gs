/**
 * ============================================================================
 * Sheets
 * ============================================================================
 *
 * Wrapper para operações do Google Sheets.
 *
 * Todo acesso ao SpreadsheetApp deve passar por este módulo.
 * ============================================================================
 */

const Sheets = (() => {

  /**
   * Retorna a planilha ativa.
   *
   * @returns {GoogleAppsScript.Spreadsheet.Spreadsheet}
   */
  function get() {
    return SpreadsheetApp.getActiveSpreadsheet();
  }

  /**
   * Retorna a interface do usuário.
   *
   * @returns {GoogleAppsScript.Base.Ui}
   */
  function getUi() {
    return SpreadsheetApp.getUi();
  }

  /**
   * Retorna uma aba pelo nome.
   *
   * @param {string} name
   * @returns {GoogleAppsScript.Spreadsheet.Sheet}
   */
  function getSheet(name) {

    const sheet = get().getSheetByName(name);

    if (!sheet) {
      throw new Error(
        `Sheet '${name}' not found.`
      );
    }

    return sheet;

  }

  /**
   * Retorna um Named Range.
   *
   * @param {string} name
   * @returns {GoogleAppsScript.Spreadsheet.Range}
   */
  function getNamedRange(name) {

    const range = get().getRangeByName(name);

    if (!range) {
      throw new Error(
        `Named range '${name}' not found.`
      );
    }

    return range;

  }

  /**
   * Exibe um toast.
   *
   * @param {string} message
   */
  function toast(message) {

    get().toast(message);

  }

  /**
   * Exibe uma caixa de diálogo.
   *
   * @param {string} title
   * @param {string} message
   */
  function alert(title, message) {

    getUi().alert(
      title,
      message,
      getUi().ButtonSet.OK
    );

  }

  return {

    get,

    getUi,

    getSheet,

    getNamedRange,

    toast,

    alert

  };

})();
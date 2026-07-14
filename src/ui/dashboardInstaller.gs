/**
 * ============================================================================
 * Dashboard Builder
 * ============================================================================
 *
 * Responsável por instalar e validar a Dashboard.
 *
 * Responsabilidades:
 *  - Preparar a planilha
 *  - Aplicar Grid
 *  - Construir componentes
 *  - Validar estrutura
 *
 * Não conhece regras de negócio.
 * ============================================================================
 */

const DashboardInstaller = (() => {

  /**
   * Instala a Dashboard.
   */
  function install() {

    Logger.info("Installing Dashboard...");

    prepareSheet();

    Dashboard.COMPONENTS.forEach(installComponent);

    Logger.info("Dashboard installed successfully.");

  }

  /**
   * Reinstala completamente a Dashboard.
   */
  function rebuild() {

    Logger.info("Rebuilding Dashboard...");

    install();

  }

  /**
   * Verifica se a Dashboard está consistente.
   *
   * @returns {boolean}
   */
  function verify() {

    Logger.info("Verifying Dashboard...");

    try {

      Dashboard.COMPONENTS.forEach(verifyComponent);

      Logger.info("Dashboard verification succeeded.");

      return true;

    }

    catch (error) {

      Logger.error(error);

      return false;

    }

  }

  /**
   * Instala um componente.
   *
   * @param {Object} component
   */
  function installComponent(component) {

    switch (component.type) {

      case ComponentTypes.METRIC:

        Components.metric(component);

        break;

      case ComponentTypes.CARD:

        Components.card(component);

        break;

      case ComponentTypes.CHART:

      case ComponentTypes.HEADER:

      case ComponentTypes.SIDEBAR:

      case ComponentTypes.SECTION:

      case ComponentTypes.LIST:

      case ComponentTypes.TABLE:

        Logger.warn(
          `Component '${component.type}' not implemented yet.`
        );

        break;

      default:

        throw new Error(
          `Unsupported component type '${component.type}'.`
        );

    }

  }

  /**
   * Verifica um componente.
   *
   * Atualmente verifica apenas os Named Ranges.
   *
   * @param {Object} component
   */
  function verifyComponent(component) {

    if (!component.bindings) {
      return;
    }

    Object.values(component.bindings)
      .forEach(binding => {

        Sheets.getNamedRange(binding);

      });

  }

  /**
   * Prepara a planilha.
   */
  function prepareSheet() {

    const sheet =
      Sheets.getSheet(
        Config.SHEETS.DASHBOARD
      );

    sheet.clear();

    sheet.clearFormats();

    sheet.setHiddenGridlines(true);

    applyGrid(sheet);

    sheet.getRange(
    1,
    1,
    sheet.getMaxRows(),
    sheet.getMaxColumns()
).breakApart();

  }

  /**
   * Aplica Grid físico.
   *
   * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet
   */
  function applyGrid(sheet) {

    Grid.SHEET.COLUMN_WIDTHS
      .forEach((width, index) => {

        sheet.setColumnWidth(
          index + 1,
          width
        );

      });

    Grid.SHEET.ROW_HEIGHTS
      .forEach((height, index) => {

        sheet.setRowHeight(
          index + 1,
          height
        );

      });

  }

  return {

    install,

    rebuild,

    verify

  };

})();
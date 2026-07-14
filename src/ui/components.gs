/**
 * ============================================================================
 * Components
 * ============================================================================
 *
 * Biblioteca de componentes reutilizáveis da UI.
 *
 * Responsabilidades:
 *  - Construção visual
 *  - Estilos
 *  - Named Ranges
 *
 * Não conhece:
 *  - Exchange
 *  - Budget
 *  - Trip
 *  - Regras de negócio
 * ============================================================================
 */

const Components = (() => {
  /**
   * Cria um Card.
   *
   * @param {{
   *   area:{
   *     row:number,
   *     column:number,
   *     rows:number,
   *     columns:number
   *   },
   *   title:string,
   *   icon:string
   * }} options
   */
  function card(options) {
    const sheet = Sheets.getSheet(Config.SHEETS.DASHBOARD);

    const area = options.area;

    const range = sheet.getRange(area.row, area.column, area.rows, area.columns);

    range
      .merge()
      .setBackground(Theme.COLORS.SURFACE)
      .setBorder(
        true,
        true,
        true,
        true,
        false,
        false,
        Theme.COLORS.BORDER,
        SpreadsheetApp.BorderStyle.SOLID,
      );

    range.setVerticalAlignment('top').setHorizontalAlignment('left');

    range.setValue(`${options.icon} ${options.title}`);

    range
      .setFontFamily(Theme.TYPOGRAPHY.FONT_FAMILY)
      .setFontSize(Theme.TYPOGRAPHY.HEADER.SIZE)
      .setFontWeight(Theme.TYPOGRAPHY.HEADER.WEIGHT);

    return range;
  }

  /**
   * Cria um Metric Card.
   *
   * @param {{
   *   area:Object,
   *   title:string,
   *   icon:string,
   *   bindings:{
   *      value:string,
   *      subtitle:string
   *   }
   * }} options
   */
  function metric(options) {
    const range = card(options);

    const sheet = Sheets.getSheet(Config.SHEETS.DASHBOARD);

    const area = options.area;

    /*
     * Valor
     */

    const valueRange = sheet.getRange(area.row + 1, area.column, 1, area.columns);

    valueRange
      .setFontFamily(Theme.TYPOGRAPHY.FONT_FAMILY)
      .setFontWeight(Theme.TYPOGRAPHY.METRIC.WEIGHT)
      .setFontSize(Theme.TYPOGRAPHY.METRIC.SIZE);

    valueRange.setValue('--');

    Sheets.setNamedRange(options.bindings.value, valueRange);

    /*
     * Subtitle
     */

    const subtitleRange = sheet.getRange(area.row + area.rows - 1, area.column, 1, area.columns);

    subtitleRange
      .setFontFamily(Theme.TYPOGRAPHY.FONT_FAMILY)
      .setFontSize(Theme.TYPOGRAPHY.CAPTION.SIZE)
      .setFontColor(Theme.COLORS.TEXT_SECONDARY);

    subtitleRange.setValue('--');

    Sheets.setNamedRange(options.bindings.subtitle, subtitleRange);

    return {
      card: range,

      value: valueRange,

      subtitle: subtitleRange,
    };
  }

  return {
    card,

    metric,
  };
})();

/**
 * ============================================================================
 * Grid
 * ============================================================================
 *
 * Sistema de Grid do Travel OS.
 *
 * Responsável por definir:
 *
 * - largura de colunas
 * - altura de linhas
 * - áreas da dashboard
 *
 * Não desenha nada.
 * Apenas fornece coordenadas.
 * ============================================================================
 */

const Grid = (() => {

  /**
   * Definição física da planilha.
   */
  const SHEET = Object.freeze({

    COLUMN_WIDTHS: [

      48,   // Sidebar

      48,

      24,

      180,

      180,

      180,

      180,

      180,

      180,

      180,

      180,

      180

    ],

    ROW_HEIGHTS: [

      16,

      48,

      120,

      120,

      24,

      220,

      220,

      24,

      160,

      160,

      24,

      180

    ]

  });

  /**
   * Áreas da Dashboard.
   */
  const AREAS = Object.freeze({

    SIDEBAR: {

      row: 1,

      column: 1,

      rows: 12,

      columns: 2

    },

    HEADER: {

      row: 2,

      column: 4,

      rows: 2,

      columns: 9

    },

    EXCHANGE_CARD: {

      row: 4,

      column: 4,

      rows: 2,

      columns: 2

    },

    BUDGET_CARD: {

      row: 4,

      column: 6,

      rows: 2,

      columns: 2

    },

    EXPENSE_CARD: {

      row: 4,

      column: 8,

      rows: 2,

      columns: 2

    },

    COUNTDOWN_CARD: {

      row: 4,

      column: 10,

      rows: 2,

      columns: 3

    },

    EXCHANGE_CHART: {

      row: 6,

      column: 4,

      rows: 2,

      columns: 9

    },

    TASKS: {

      row: 9,

      column: 4,

      rows: 2,

      columns: 4

    },

    RESERVATIONS: {

      row: 9,

      column: 8,

      rows: 2,

      columns: 5

    },

    EXPENSES: {

      row: 12,

      column: 4,

      rows: 1,

      columns: 9

    }

  });

  /**
   * Retorna uma área.
   *
   * @param {string} name
   * @returns {{row:number,column:number,rows:number,columns:number}}
   */
  function get(name) {

    const area = AREAS[name];

    if (!area) {

      throw new Error(
        `Grid area '${name}' not found.`
      );

    }

    return area;

  }

  return {

    SHEET,

    AREAS,

    get

  };

})();
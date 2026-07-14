/**
 * ============================================================================
 * Test Runner
 * ============================================================================
 */

const TestRunner = (() => {

  /** @type {{
   * category:string,
   * name:string,
   * callback:Function
   * }[]}
   */
  const tests = [];

  /**
   * Registra um teste.
   *
   * @param {string} category
   * @param {string} name
   * @param {Function} callback
   */
  function register(category, name, callback) {

    tests.push({
      category,
      name,
      callback
    });

  }

  /**
   * Executa todos os testes.
   */
  function run() {

    runInternal();

  }

  /**
   * Executa apenas uma categoria.
   *
   * @param {string} category
   */
  function runCategory(category) {

    runInternal(category);

  }

  /**
   * Execução interna.
   *
   * @param {string=} categoryFilter
   */
  function runInternal(categoryFilter = null) {

    const started = Date.now();

    let passed = 0;
    let failed = 0;

    const selected = categoryFilter
      ? tests.filter(t => t.category === categoryFilter)
      : [...tests];

    selected.sort((a, b) => {

      if (a.category === b.category) {
        return a.name.localeCompare(b.name);
      }

      return a.category.localeCompare(b.category);

    });

    Logger.info("======================================");
    Logger.info("Travel Dashboard Test Runner");
    Logger.info("======================================");

    let currentCategory = null;

    selected.forEach(test => {

      if (test.category !== currentCategory) {

        currentCategory = test.category;

        Logger.info("");
        Logger.info(`[${currentCategory}]`);

      }

      const startedTest = Date.now();

      try {

        test.callback();

        const elapsed =
          Date.now() - startedTest;

        Logger.info(
          `✔ ${test.name} (${elapsed} ms)`
        );

        passed++;

      }

      catch (error) {

        const elapsed =
          Date.now() - startedTest;

        Logger.info(
          `✖ ${test.name} (${elapsed} ms)`
        );

        Logger.error(error);

        failed++;

      }

    });

    const duration =
      ((Date.now() - started) / 1000)
        .toFixed(2);

    Logger.info("");
    Logger.info("--------------------------------------");
    Logger.info(`Tests : ${selected.length}`);
    Logger.info(`Passed: ${passed}`);
    Logger.info(`Failed: ${failed}`);
    Logger.info(`Time  : ${duration}s`);
    Logger.info("--------------------------------------");

  }

  return {

    register,

    run,

    runCategory

  };

})();

/**
 * Executa toda a suíte.
 */
function runAllTests() {

  TestRunner.run();

}

/**
 * Executa apenas Core.
 */
function runCoreTests() {

  TestRunner.runCategory("Core");

}

/**
 * Executa apenas Exchange.
 */
function runExchangeTests() {

  TestRunner.runCategory("Exchange");

}

/**
 * Executa apenas App.
 */
function runAppTests() {

  TestRunner.runCategory("App");

}
/**
 * ============================================================================
 * Bootstrap
 * ============================================================================
 */

const Bootstrap = (() => {

  function initialize() {

    Logger.info("Initializing application...");

    verifySheets();

    verifyNamedRanges();

    verifyProvider();

    Sheets.toast(
      "Inicialização concluída."
    );

  }

  function verify() {

    verifySheets();

    verifyNamedRanges();

    verifyProvider();

    Sheets.alert(
      "Travel Dashboard",
      "Instalação válida."
    );

  }

  function installTriggers() {

    removeTriggers();

    ScriptApp.newTrigger(
      "updateDashboard"
    )
      .timeBased()
      .everyHours(1)
      .create();

    Sheets.toast(
      "Trigger instalado."
    );

  }

  function removeTriggers() {

    ScriptApp
      .getProjectTriggers()
      .forEach(trigger => {

        ScriptApp.deleteTrigger(
          trigger
        );

      });

  }

  function verifySheets() {

    Object.values(
      Config.SHEETS
    ).forEach(name => {

      Sheets.getSheet(name);

    });

  }

  function verifyNamedRanges() {

    Object.values(
      Config.RANGES
    ).forEach(name => {

      Sheets.getNamedRange(name);

    });

  }

  function verifyProvider() {

    if (!ExchangeProvider.isAvailable()) {

      throw new Error(
        "Provider indisponível."
      );

    }

  }

  return {

    initialize,

    verify,

    installTriggers,

    removeTriggers

  };

})();

/* -------------------------------------------------------------------------- */
/* Apps Script wrappers                                                       */
/* -------------------------------------------------------------------------- */

function initializeApplication() {

  Bootstrap.initialize();

}

function verifyInstallation() {

  Bootstrap.verify();

}

function installTriggers() {

  Bootstrap.installTriggers();

}

function removeTriggers() {

  Bootstrap.removeTriggers();

}
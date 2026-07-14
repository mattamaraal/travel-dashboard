/**
 * ============================================================================
 * Logger
 * ============================================================================
 */

const Logger = (() => {

  const LEVEL = Object.freeze({

    INFO: 'INFO',

    WARN: 'WARN',

    ERROR: 'ERROR'

  });

  function write(level, message) {

    console.log(`[${level}] ${message}`);

  }

  function info(message) {

    write(
      LEVEL.INFO,
      message
    );

  }

  function warn(message) {

    write(
      LEVEL.WARN,
      message
    );

  }

  function error(error) {

    if (error instanceof Error) {

      console.error(error.stack);

      return;

    }

    console.error(error);

  }

  return {

    info,

    warn,

    error

  };

})();
const LOG_LEVEL = {
  INFO: "INFO",
  WARN: "WARN",
  ERROR: "ERROR"
};

function log(level, message) {
  console.log(`[${level}] ${message}`);
}

function logInfo(message) {
  log(LOG_LEVEL.INFO, message);
}

function logWarn(message) {
  log(LOG_LEVEL.WARN, message);
}

function logError(error) {
  if (error instanceof Error) {
    console.error(
      `[ERROR] ${error.message}\n${error.stack}`
    );
  } else {
    console.error(`[ERROR] ${error}`);
  }
}
/**
 * ============================================================================
 * Assertions
 * ============================================================================
 */

const Assert = (() => {

  function isTrue(condition, message = "Expected condition to be true.") {

    if (!condition) {
      throw new Error(message);
    }

  }

  function isFalse(condition, message = "Expected condition to be false.") {

    if (condition) {
      throw new Error(message);
    }

  }

  function equals(expected, actual, message = null) {

    if (expected !== actual) {

      throw new Error(
        message ??
        `Expected '${expected}', got '${actual}'.`
      );

    }

  }

  function notNull(value, message = "Expected value to be not null.") {

    if (value === null || value === undefined) {
      throw new Error(message);
    }

  }

  function isNull(value, message = "Expected value to be null.") {

    if (value !== null) {
      throw new Error(message);
    }

  }

  function fail(message = "Test failed.") {

    throw new Error(message);

  }

  return {

    isTrue,

    isFalse,

    equals,

    notNull,

    isNull,

    fail

  };

})();
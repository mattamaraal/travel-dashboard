TestRunner.register(
  "Core",
  "Dashboard sheet exists",
  () => {

    Assert.notNull(
      Sheets.getSheet(
        Config.SHEETS.DASHBOARD
      )
    );

  }
);

TestRunner.register(
  "Core",
  "Exchange history exists",
  () => {

    Assert.notNull(
      Sheets.getSheet(
        Config.SHEETS.HISTORY
      )
    );

  }
);
TestRunner.register(
  "Core",
  "Config loaded",
  () => {

    Assert.notNull(Config);
    Assert.notNull(Config.API);
    Assert.notNull(Config.SHEETS);
    Assert.notNull(Config.RANGES);

  }
);
const { getModuleInfo } = require("../src/services/module");

describe("Routes", () => {
  it("Should be return module info", () => {
    const moduleInfo = getModuleInfo();
    expect(moduleInfo).not.toBeNull();
    expect(moduleInfo).not.toBeUndefined();
  });
});

const assert = require("assert");
const User = require("../src/models/User");

describe("Validating records", () => {
  it("requires a user name", () => {
    const user = new User({ name: undefined });
    const result = user.validateSync();
    const { message } = result.errors.name;
    assert(message === message);
  });

  it("requires a user name longer than 2 characters", () => {
    const user = new User({ name: "Al" });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name;
    assert(message === "Name must be longer than 2 characters");
  });

  it("disallow invalid records from being saved", () => {
    const user = new User({ name: "Al" });
    user.save().catch(validationResult => {
      const { message } = validationResult.errors.name;
      assert(message === "Name must be longer than 2 characters");
    });
  });
});

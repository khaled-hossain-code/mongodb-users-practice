const assert = require("assert");
const User = require("../src/models/User");

describe("Reading records", () => {
  beforeEach(async () => {
    const jane = new User({ name: "jane" });
    await jane.save();
  });

  xit("Finds all users with a name of jane", async () => {
    const jane = await User.findOne({ name: "jane" });
    assert(jane.name === "jane");
  });
});

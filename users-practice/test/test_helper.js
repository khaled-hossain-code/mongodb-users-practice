const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
  user: "root",
  pass: "rootPassMongo123",
  dbName: "users_test"
});

before(async () => {
  await mongoose.connection
    .once("open", () => console.log("Good to go"))
    .on("error", error => console.warn("warning", error));
});

beforeEach(async () => {
  mongoose.connection.db.listCollections({name: 'users'})
    .next(async function(err, collinfo) {
      if (collinfo) {
          await mongoose.connection.collections.users.drop();
        }
    });
});

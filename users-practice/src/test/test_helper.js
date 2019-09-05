const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
  user: "root",
  pass: "rootPassMongo123",
  dbName: "users_test"
});

mongoose.connection
  .once("open", () => console.log("Good to go"))
  .on("error", error => console.warn("warning", error));

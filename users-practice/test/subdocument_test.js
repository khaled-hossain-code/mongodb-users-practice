const assert = require("assert");
const User = require("../src/models/User");

describe("Subdocuments", () => {
  it("can create a subdocument", async () => {
    const user = new User({
      name: "joe",
      posts: [{ title: "This is my first post" }]
    });
    const joe = await user.save();
    assert(joe.posts[0].title === "This is my first post");
  });

  it("can add subdocument to an existing document", done => {
    const user = new User({ name: "jane", posts: [] });
    user
      .save()
      .then(() => User.findOne({ name: "jane" }))
      .then(jane => {
        jane.posts.push({ title: "This is my first post" });
        return jane.save();
      })
      .then(() => User.findOne({ name: "jane" }))
      .then(updatedJane => {
        assert(updatedJane.posts[0].title === "This is my first post");
        done();
      });
  });

  xit("can remove an existing amount", done => {
    const user = new User({
      name: "khaled",
      posts: [{ title: "This is my first post" }]
    });

    user
      .save()
      .then(() => User.findOne({ name: "khaled" }))
      .then(joe => {
        const post = joe.posts[0];
        post.remove();
        return joe.save();
      })
      .then(() => User.findOne({ name: "khaled" }))
      .then(updatedJoe => {
        assert(updatedJoe.posts.length === 0);
        done()
      });
  });
});

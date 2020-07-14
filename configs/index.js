const mode = "TESTING";

if (mode == "TESTING") {
  module.exports = {
    db: "mongodb://localhost:27017/",
  };
} else {
  module.exports = {
    db: "mongodb://localhost:27017/",
  };
}

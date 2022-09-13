const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/the-budget", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("debug", true);

module.exports = mongoose.connection;

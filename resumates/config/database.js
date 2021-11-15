const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL || "mongodb://localhost:27017/")
// {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false
// });

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

module.exports = { db }
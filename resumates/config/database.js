const mongoose = require("mongoose");

console.log(process.env.DATABASE_URL) 
mongoose.connect(process.env.DATABASE_URL)

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
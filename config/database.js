const mongoose = require("mongoose");

const DatabaseConnection = () => {
  const { DATABASE_URL } = process.env;
  mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection.on("connected", function() {
    console.log(`Mongoose default connection is open to ${DATABASE_URL}`);
  });

  mongoose.connection.on("error", function(err) {
    console.log(`Mongoose default connection has occured ${err} error`);
  });

  mongoose.connection.on("disconnected", function() {
    console.log(`Mongoose default connection is disconnected`);
  });

  process.on("SIGINT", function() {
    mongoose.connection.close(function() {
      console.log(
        `Mongoose default connection is disconnected due to application termination`
      );
      process.exit(0);
    });
  });
};

module.exports = DatabaseConnection;

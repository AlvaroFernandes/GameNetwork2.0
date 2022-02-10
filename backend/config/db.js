const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);

    console.log(
      colors.green.underline(`MongoDB connected: ${conn.connection.host}`)
    );
  } catch (error) {
    console.log(colors.red.bold(`error: ${error.message}`));
    process.exit;
  }
};

module.exports = connectDB;

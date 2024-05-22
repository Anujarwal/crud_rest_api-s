// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGOO_URI);
//     console.log("DB connection successfull");
//   } catch (error) {
//     console.log("DB connection failed");
//   }
// };

// module.exports = {connectDB};

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGOO_URI);
    console.log("DB connection successfull");
  } catch (error) {
    console.log("DB connection failed : " , error.message);
  }
};

module.exports = { connectDB };

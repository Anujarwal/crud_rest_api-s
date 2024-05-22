const express = require("express");
const { connectDB } = require("./config/db_config");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

// DB Connection
connectDB();

// app.use(express.json())
// app.use(express.urlencoded({extended :true}))

app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.get("/", (req, res) => {
  res.json({
    message: "WELCOME TO CRUD API",
  });
});

// app.use()

app.use("/api/todo", require("./routes/todoRoutes"));

app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT}`);
});

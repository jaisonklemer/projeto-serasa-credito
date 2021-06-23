const mongoose = require("mongoose");

if(!process.env.PRODUCTION){
  require("dotenv").config();
}

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected"))
  .catch((error) => {
    console.error(error.message);
  });

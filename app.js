const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Mini Message Board - listening on port ${PORT}!!`);
});

const express = require("express");
const app = express();
const logInfo = require("./logs");

app.get("/fact/:id", (req, res) => {
  const params = req.params.id;
  logInfo.log("req", new Date(), params);
  let result = 1;
  for (let i = 1; i <= params; i++) {
    result *= i;
  }
  logInfo.log("response", new Date(), result);
  res.send(`Factorial of num ${params} is ${result}`);
});

app.listen(3000, "0.0.0.0");

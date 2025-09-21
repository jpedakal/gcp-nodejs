const express = require("express");
const app = express();

app.get("/fact/:id", (req, res) => {
  const params = req.params.id;
  let result = 1;
  for (let i = 1; i <= params; i++) {
    result *= i;
  }
  res.send(`Factorial of num ${params} is ${result}`);
});

app.listen(3000);

const express = require("express");
const app = express();

app.get("/fact/:id", (req, res) => {
  const params = req.params.id;
  console.log('req', new Date(), params)
  let result = 1;
  for (let i = 1; i <= params; i++) {
    result *= i;
  }
  console.log('response', new Date(), result)
  res.send(`Factorial of num ${params} is ${result}`);
});

app.listen(3000, "0.0.0.0");

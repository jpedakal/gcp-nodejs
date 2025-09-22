const express = require("express");
const app = express();
const { writeLog } = require("./logs");
import getSecret from "./secret";

app.get("/fact/:id", async (req, res) => {
  const params = parseInt(req.params.id, 10); // convert string to number
  const secretData = await getSecret('initial_value')
  console.log('secret data', secretData);
  await writeLog("req", new Date(), params);

  let result = 1;
  for (let i = 1; i <= params; i++) {
    result *= i;
  }

  await writeLog("response", new Date(), result);

  res.send(`Factorial of num ${params} is ${result}`);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});

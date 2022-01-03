const express = require("express");
const app = express();

let count = 0;
app.get("/", (req, res) => {
  count++;
  res.send(`Hello, World!, visited ${count} ${count > 1 ? "times" : "time"}`);
});

const port = 5001;
app.listen(port, () => console.log(`Server started on port ${port}`));

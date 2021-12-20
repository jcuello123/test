const express = require("express");
const app = express();
const PORT = process.env.PORT || 80;

app.get("/", (req, res) => {
  res.send(require("os").networkInterfaces());
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

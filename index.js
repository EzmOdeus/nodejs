const express = require("express");
const app = express();
app.use(express.json());
app.get("/vid", (req, res) => {
  res.json([
    {
      " url": "vi",
    },
    {
      " url": "vi",
    },
  ]);
});
app.listen(5000, () => {
  console.log("server is run");
});

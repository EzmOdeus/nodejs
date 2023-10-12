const express = require("express");
const app = express();
app.use(express.json());
app.get("/vid", (req, res) => {
  res.json(
    {
      " url": [
        "https://media.islamway.net/lessons/582/452_Samer_AsmMohemen.mp4",
        "https://media.islamway.net/lessons/582/506_Samer_Qaynqi3.mp4",
      ],
    },
    {
      " url": "https://media.islamway.net/lessons/582/506_Samer_Qaynqi3.mp4",
    },
  );
});
app.listen(5000, () => {
  console.log("server is run");
});

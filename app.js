const express = require("express");
const app = express();
const port = process.env.PORT || 4567;

// お作法的な定義
app.use(express.urlencoded({ extended: true, limit: "200mb" }));
app.use(express.json({ extended: true, limit: "200mb" }));

// ルーティング設定
app.use("/", require("./src/mockApiRouter"));

// CORS設定
const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
};
app.use(allowCrossDomain);

app.listen(port);
console.log(`started api mock server http://localhost:${port}`);

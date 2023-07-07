const cors = require("cors");
const express = require("express");
const router = require("./src/router");

require("dotenv/config");

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

router(app);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

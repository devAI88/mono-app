require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

/* needs to be agreeable for both my computer ,and HEROKU */
const port = process.env.PORT || 4300;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/api/greeting", (req, res) => {
  res.json(`hello, ${req.query.name}! how are you?`);
});

app.use((req, res) => {
  res.json("This API is alive");
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

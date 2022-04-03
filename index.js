const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");
const shirts = require("./routes/shirts");
const pants = require("./routes/pants");

dotenv.config({ path: "./.env" });

app.use(express.json());
app.use(cors());


app.use("/shirts", shirts);
app.use("/pants", pants);

let port = 4000;


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

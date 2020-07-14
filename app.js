const express = require("express");
const path = require("path");
const http = require("http");

const indexRouter = require("./routes/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

const server = http.createServer(app);
const port = process.env.PORT || "3000";
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

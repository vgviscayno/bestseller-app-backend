import app from "./app";
require("./db/connection");

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

const express = require('express');
const app = express();
const port = 3100;
const path = require('path');

app.use(express.json());
app.use("/client", express.static(path.join(__dirname, '../')));

// app.get("/",function (req, res) {
//   res.sendFile(path.join(__dirname,  "../client/index.html"))
// });


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
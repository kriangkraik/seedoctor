const https = require("https");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require('path');

dotenv.config();

/* Configure middleware */
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/* Configure routing */
app.get("/", (req, res) => {
  res.render('index.pug');
});


// listen on port
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server listening on Port ${port}`);
});

const express = require('express');
const morgan = require('morgan');
const path = require("path")

const app = express();
require('dotenv').config();
app.use(morgan('dev'));
app.use(express.json());

const port = process.env.port || 3000


app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
)
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
)
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")))


// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
  res.render('src/index');
});

// about page




app.listen(port, () => {
  console.log(`Server is runing on port http://localhost:${port}`)
})
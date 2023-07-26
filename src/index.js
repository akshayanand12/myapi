const { response } = require("express");
const City  = require("./models/city")
const express = require("express");
const app = express();
const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgres://read_write_user:password@localhost:5432/world");
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

const port = process.env.PORT || 80;

app.get("/", async(req, res) => {
  const cities = await City.findAll();
  
  res.send({
    message: cities
  });
});

app.get("/test", (req, res) => {
  if (req.body) {
    alert(req.body);
    res.send({
      message:
        "Here's your response from test URL in the node.js 🐳 container with this in the request body",
    });
  } else {
    res.send({
      message:
        "Here's your response from test URL in the node.js 🐳 container with nothing in the request body",
    });
  }
});

app.listen(port, () => {
  console.log(`Hi there, I'm listening on port http://localhost:${port}`);
});

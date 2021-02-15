const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json({limit: "50MB"}));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {
   res.send("hhh");
});

app.listen(5000, () => {
    console.log("Listening on Port 5000");
});
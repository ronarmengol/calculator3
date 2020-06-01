const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

app.use(express.static("public"));
let ans = "";

app.get("/", function (req, res) {
    res.render("home", {
        ans : ans
    });
});

app.post("/", function (req, res) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    ans = num1 + num2;

    res.render("home", {
        ans : ans
    });
});


app.listen(process.env.PORT || 3000, function() {
    console.log("server is running on port 3000");
});

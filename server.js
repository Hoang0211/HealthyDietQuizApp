const express = require("express");
const app = express();
const ejs = require("ejs");

const port = 8080;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("pages/index");
})

app.listen(port, () => {
    console.log("Server is running on port 8080!");
});
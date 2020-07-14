// Bring in Dependences/Modules
const express = require("express");
const path = require ("path");
const app = express();
const PORT = 8000;

//Configuring Express App
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//Configure EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Home route
app.get("/", (req, res) => {
    res.render("index.ejs");
}); 

app.listen(PORT, () => {
    console.log("Server started on port::::8000")
});

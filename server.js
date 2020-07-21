// Bring in Dependences/Modules
const express = require("express");
const path = require ("path");
const mongoose = require("mongoose");
const Store = require("./models/store").Store;
const logger = require ("morgan");
const flash = require ("connect-flash")

//Define exprees funtion
const app = express();
const PORT = 8000;

//Configure mongoose to connect to database 
mongoose.connect("mongodb://localhost/rannysoft", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
 })
 .then((response) =>{
     console.log("Rannysoft database connected successfully");
 })
 .catch((error) =>{
     console.log(error);
 });




//Configuring Express App
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//Configure Logger
app.use(logger('dev'));
app.use(flash());

//Configure EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Home route
app.get("/", (req, res) => {
    res.render("index.ejs");
}); 
// About route
app.get("/about", (req, res)=>{
    res.render("about.ejs");
});

//Register GET route
app.get("/register", (req, res)=>{
    res.render("register.ejs");
});

//Register POST route
app.post("/regsiter", (req, res)=>{
    let {
        username,
        email,
        password,
        confirm_password,
        address,
        phone_number}  = req.body;
    
        if (password.legnth >= 5)
        if(password != confirm_password){
            console.log("Passwords do not match");
            res.redirect("/register");
        }else
        var newstore = new Store({
            username: store_name,
            email:email,
            password:password,
            phone_number:phone_number,
            address:address,
        });
        newstore.save();
        console.log("Passwords must be upto 5 characters")
        res.redirect("/register");
});




app.listen(PORT, () => {
    console.log("Server started on port::::8000")
});

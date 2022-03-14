const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
//IF we host the website then it take automatically because we are using "localhost and environment by using or symbol"
const port =process.env.PORT || 8000;

//Public Static Path/ Dynamic
//console.log(path.join(__dirname,"../public"));
const static_path = path.join(__dirname, "../public");
const template_Path = path.join(__dirname,"../templates/views"); //if we use partial file  in dynamic than we have to set the location
const partials_path =path.join(__dirname,"../templates/partials");


app.set('view engine' ,'hbs');
app.set("views", template_Path);
hbs.registerPartials(partials_path);// for using partials file we have to use the code (like components)

//app.use(express.static(static_path));

//Routing
app.get("", (req, res) =>{
res.render("index.hbs")
});
app.get("/about", (req, res) =>{
    res.render("about.hbs")
    });
    app.get("/weather", (req, res) =>{
        res.render("weather.hbs")
        });
        app.get("/process", (req, res) =>{
            res.render("process.hbs")
            });
        app.get("*", (req, res) =>{
            res.render("404error.hbs",{
                error: "Oops page not found"
            })
            });
           

app.listen(port, ()=>{
    console.log(`listening to the port ${port}`)
})
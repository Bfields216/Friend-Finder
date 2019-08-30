var path = require('path');

//ROUTING

module.exports = function(app){
//the GET route that leads to home.html - displays home page

app.use("/survey", function (req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.use(function (req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});
}
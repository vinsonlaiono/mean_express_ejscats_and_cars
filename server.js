var express = require('express');
var app = express();

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/views"));

app.get('/', function(request, response) {
    response.send("<h1>This is the root route for the test app</h1> <a href='/cars'>cars</a>");
})
app.get('/cars', function(request, response) {
    var cars =[
        {car : 'car1.jpg'},
        {car : 'car2.jpg'},
        {car : 'car3.jpg'},
    ]
    response.render('cars.ejs', {car: cars})
})
app.get('/cats', function(request, response) {
    var cats =[
        {cat : 'cat1.jpg'},
        {cat : 'cat2.jpg'},
        {cat : 'cat3.jpg'},
    ]
    response.render('cats.ejs', {cat: cats})
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})
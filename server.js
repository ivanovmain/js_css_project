var express = require('express');
var app = express();
var artists = [
    {
        id: 1,
        name: 'SNDS'
    },
    
    {
        id: 2,
        name: 'Lisa'
    }
    ,
    
    {
        id: 3,
        name: 'OMG'
    }

];

app.use(express.static('public'));

app.get('/', function(req, res){
    res.send('hello API');
})

app.get('/artists', async function(req, res){
    
    res.json(artists);
});

app.get('/artists/:id', function(req, res){

    var artist = artists.find(function(artist){
        return artist.id === Number(req.params.id); 
    })
    res.send(artist);
})

app.listen(3000, function(){
    console.log("Started");
    
});
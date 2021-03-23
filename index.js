require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


app.post('/', function(req,res){
    res.send('POST del path');
})
app.get('/usuarios', function(req,res){
    res.send('Usuario: FErnando');
})

app.listen(port, () => {
    console.log(`Server started - Port ${port}`);
});
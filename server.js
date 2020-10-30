const express = require('express');
const bodyParser= require('body-parser')
const app = express();


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mcf:<Database123>@cluster0.alndg.mongodb.net/<MorganOnPage>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,
  useUnifiedTopology: true
 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});


app.use(bodyParser.urlencoded({extended:true}))

app.listen(3000, function() {
  console.log('listening on 3000')
})

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html')
})

app.post('/comments', (req,res) => {
  console.log(req.body)
})

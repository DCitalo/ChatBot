const express = require('express');
const app = express();
const apiai = require('apiai')('165db1b8f34c480c978b0584f8f85a8d');

app.use(express.static(__dirname + '/views')); // html
app.use(express.static(__dirname + '/public')); // js, css, images

const server = app.listen(5000);
app.get('/', (req, res) => {
  res.sendFile('index.html');
});
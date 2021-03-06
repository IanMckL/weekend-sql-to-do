
////////////////////////////////////////////////////////////
// Server initialization
////////////////////////////////////////////////////////////
const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const { send } = require('express/lib/response');
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('Server/public'));

// GET & POST Routes go here


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////



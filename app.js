const express = require('express');
const axios = require('axios');
const app = express();


app.set('view engine', 'pug');

app.get('/', async (req, res)=>{
    const query = await axios.get('http://localhost:3001/rooms');
    res.render('index', { rooms: query.data}); 
    res.render('ui-kit');
});

app.use(express.static(__dirname + '/public'));

const httpServer = app.listen(3000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});

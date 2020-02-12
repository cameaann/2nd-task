const express = require('express');
const app = express();


app.set('view engine', 'pug');

app.get('/', (req, res)=>{
    res.render('index');
});


const httpServer = app.listen(3000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});

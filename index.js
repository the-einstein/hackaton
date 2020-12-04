const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('data');
})

app.listen(3000, (err) => {
    if (err) console.log(`there is an error \n ${err}`);

    console.log('server listening on port 3000');
})
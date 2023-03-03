const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const api = require('./routes/apiRoutes/apiRoutes.js');
const html = require('./routes/htmlRoutes/htmlRoutes.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', api);
app.use('/', html);

app.listen(PORT, () => {
    console.log(`API server listening on ${PORT}!`);
});
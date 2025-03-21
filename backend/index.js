const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes.js');
const config = require('./repositories/config').port();
const protocol = require('./controller/protocol.js');

const app = express();
console.log("Start")

app.use(bodyParser.json());
app.use('/path', router);

app.listen(config.port, () => {
    console.log(`Server is running on port http://localhost:${config.port}/path`);
});
const express = require('express');
const {getConnection} = require('./db/Connection');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT;

app.use(cors()); 

getConnection();

app.use(express.json());

app.use('/proyecto', require('./router/proyecto'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


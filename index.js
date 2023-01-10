const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require("./models/dbConfig");
const postsRoutes = require('./routes/postsController')
const cors = require('cors');



app.use(bodyParser.json());
app.use(cors())
app.use('/posts', postsRoutes)


app.listen(3000, () => console.log('listening on port 3000'));
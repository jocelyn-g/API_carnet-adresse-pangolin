const bodyParser = require('body-parser');
require('dotenv').config();
const express = require('express');
const app = express();
require("./models/dbConfig");
const postsRoutes = require('./routes/postsController')
const cors = require('cors');
const auth = require('./routes/auth')




app.use(bodyParser.json());
app.use(cors())
app.use('/posts', postsRoutes)
app.use('/auth', auth)


app.listen(3000, () => console.log('listening on port 3000'));
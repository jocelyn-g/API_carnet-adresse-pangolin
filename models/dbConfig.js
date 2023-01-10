const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://0.0.0.0:27017/pangolin-api",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) console.log("Mongodb connected");
        else console.log("Connection error :" + err);
    }
)
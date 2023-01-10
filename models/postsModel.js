const mongoose = require('mongoose');

const PostsModel = mongoose.model(
    "pangolin-api",
    {
        name: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
    },
    "posts"
);

module.exports = {PostsModel}
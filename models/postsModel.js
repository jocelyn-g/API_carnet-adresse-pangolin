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
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        contact: {
            type: Array,
            required: true,
        },
    },
    "posts"
);

module.exports = {PostsModel}
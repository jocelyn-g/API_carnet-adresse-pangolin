const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { PostsModel} = require('../models/postsModel')

// GET
router.get('/', (req, res) => {
    PostsModel.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error to get data : " + err);
    })
});

// ADD
router.post('/', (req, res) => {
    const newRecord = new PostsModel({
        name: req.body.name,
        role: req.body.role
    });

    newRecord.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error creating new data : ' + err);
    })
})

// Update
router.put("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknow : " + req.params.id)

    const UpdateRecord = {
        name: req.body.name,
        role: req.body.role
    };

    PostsModel.findByIdAndUpdate(
        req.params.id,
        { $set: UpdateRecord},
        { new: true },
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("Update error : " + err)
        }
    )
})

// Delete
router.delete("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknow : " + req.params.id)

    PostsModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("Delete error : " + err)
        }
    )

})

module.exports = router
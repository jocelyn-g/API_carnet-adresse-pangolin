const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');
JWT_SECRET = 'ghhqdfgjqmvlkcjbfdhvlkmbjd'
require('dotenv').config();


const { PostsModel} = require('../models/postsModel')

router.post('/login', (req, res) =>{
    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({ message: 'Bad email or password'})
    }

    PostsModel.find((err, docs) => {
        let emailValid = false
        let incremente = 0
        let recupId = 0
        let recupPass = ""
        console.log(docs)
        for(let doc of docs){
            if(doc.email == email) emailValid = true, recupId = incremente, recupPass = doc.password
            else incremente = incremente + 1
        }

        if (emailValid == false) return res.status(401).json({ message: 'This account does not exists !'});
        
        if (docs[recupId].password == recupPass) {
            const token = jsonwebtoken.sign({
                name: docs[recupId].name,
                email: docs[recupId].email,
                role: docs[recupId].role,
                contact: docs[recupId].contact,
            }, process.env.ACCESS_TOKEN_SECRET , {expiresIn: '600s'})

            return res.json({access_token: token})
        }else{
            return res.status(401).json({ message: `Wrong password`})
        }
    })




})

module.exports = router
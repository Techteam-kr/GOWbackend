const express = require('express');
const router = express.Router();
const Categories = require('../models/categories')

router.get('/', async(req,res) => {
    console.log('Get Request in Category')
    //res.send('Get Request in Category')
    try {
        const categories = await Categories.find()
        res.json(categories)
    } catch (err) {
        res.send('Error' + err)
    }
})

router.post('/', async(req,res) => {
    const categories = new Categories({
        
        Housing:req.body.Housing,
        Women:req.body.Women

    })

    try {
        const c1 = await categories.save();
        res.json(c1)
    } catch (err) {
        res.send('Error' + err)
        
    }
})

module.exports = router
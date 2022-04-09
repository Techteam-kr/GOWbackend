const express = require('express');
const router = express.Router();
const data = require('../masterJson')
const Categories = require('../models/categories')

router.post('/', async(req,res) => {
    console.log('Starrted')
    res.status(201).send(req.body)
    console.log(req.body.searchValue)

    searchValue = req.body.searchValue;
    console.log(searchValue)

    searchValue = searchValue.toLowerCase();

    console.log(searchValue)

    let Searchoutput = data.filter(filData => {
        return filData.name.toLowerCase().includes(searchValue);
      });

      console.log(Searchoutput)
      res.status(201).send(Searchoutput)
})






module.exports = router
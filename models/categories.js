const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({

    
    Category1: {
        type: Array,
        default: ["Housing","Pension","Disability","Transgender","Women & Children","Health","Unorganised Labour","Students","Skill Development","BPL",
        "Other"]
    },
    
    
})

module.exports = mongoose.model('Categories', categoriesSchema)


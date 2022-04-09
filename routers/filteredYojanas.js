const express = require('express');
const router = express.Router();
const data = require('../masterJson')

function CategoryFilter(value) {
    let output = data.filter(filData => {
  return filData.category.includes(value);
});
    return output;
    
} 

router.post('/', async(req,res) => {
    console.log(req.body)
    console.log(req.body.categories[0] + 'Categories are')

    var inputData = req.body;

    function CategoryFilter(value) {
        let output = data.filter(filData => {
      return filData.category.includes(value);
    });
        return output;
        
    }  

    ////////////////////////////////////////////////////////////////////////////////////
    if(inputData.categories.length==0){
      console.log('No Category Selected')
      //Gender Select
    let Genderoutput = data.filter(filData => {
    return filData.gender.includes(inputData.gender);
  });
  //console.log('Genderoutput')
  //console.log(Genderoutput)
  
  let Disabilityoutput = data.filter(filData => {
       return filData.disability.includes(inputData.disability);
      });
      
      let agefilteroutput = []
      for(let i = 0; i<data.length; i++ ){
          
          if(data[i].ageLowerLimit  <=  inputData.ageLowerLimit && data[i].ageHigherLimit >= inputData.ageHigherLimit){
               agefilteroutput.push(data[i])
          }
      }
      //console.log(agefilteroutput)
      
      
      
  //     let agefilterdata = []
  //   // console.log(inputData.age)
  //     //console.log(data[1].age)
  //     for(let i=0; i< data.length;  i++){
  //          if(inputData.age < data[i].age){
  //             agefilterdata.push(data[i])
  //     } 
  //     }
       //  console.log('agefilterdata')
    // console.log(agefilterdata)
  
      
      // let AgeOutput = data.filter(filData => {
      //  return filData.age.includes(inputData.disability);
      // });
  
    //  console.log('Disabilityoutput')
    //  console.log(Disabilityoutput)
      
      let finaljson = [];
      finaljson = Disabilityoutput.concat(Genderoutput);
      finaljson = finaljson.concat(agefilteroutput)
     // console.log('finaljson')
    //  console.log(finaljson)
      
      const FinaljsonString = new Set(finaljson.map(JSON.stringify))
      const FinaljsonStringArray = Array.from(FinaljsonString)
       const FinaljsonObject = FinaljsonStringArray.map(JSON.parse)
       console.log('FinaljsonObject')
       console.log(FinaljsonObject)
       res.status(201).send(FinaljsonObject)
  } else {
    console.log("Category Is Selected")
   
    if(inputData.gender.length ==0 && inputData.disability.length==0 && inputData.ageLowerLimit.length ==0 && inputData.ageHigherLimit.length == 0){
        console.log("Only Category is Selected")
        
        var noOfCategories = inputData.categories.length;
    let totaljson = [];
    for(let i = 0; i < inputData.categories.length ; i++){
    let outputjson = CategoryFilter(inputData.categories[i])
    totaljson = totaljson.concat(outputjson);
}

 const FinalString = new Set(totaljson.map(JSON.stringify))
 const FinalStringArray = Array.from(FinalString)
 const FinalObject = FinalStringArray.map(JSON.parse)
 console.log(FinalObject)
 res.status(201).send(FinalObject)
    }
    
    else {
    console.log('Category and Filter is selected')
    //Category Select
    var noOfCategories = inputData.categories.length;
    let totaljson = [];
    for(let i = 0; i < inputData.categories.length ; i++){
    let outputjson = CategoryFilter(inputData.categories[i])
    totaljson = totaljson.concat(outputjson);
}

//console.log(totaljson)

 const FinalString = new Set(totaljson.map(JSON.stringify))
 const FinalStringArray = Array.from(FinalString)
 const FinalObject = FinalStringArray.map(JSON.parse)
//  console.log(FinalObject)
 
 //Applying Gender Filter on Selected Category
 let Genderoutput = FinalObject.filter(filData => {
  return filData.gender.includes(inputData.gender);
});
 //   console.log('Genderoutput')
  //  console.log(Genderoutput)
    
    //Applying Disability Filter on Selected Category
    let Disabilityoutput = FinalObject.filter(filData => {
     return filData.disability.includes(inputData.disability);
    });
    // console.log('Disabilityoutput')
    // console.log(Disabilityoutput)
    
    //Applying Age Filter on Selected Category 
    let agefilteroutput = []
    for(let i = 0; i<FinalObject.length; i++ ){
        
        if(FinalObject[i].ageLowerLimit <=  inputData.ageLowerLimit ){
             agefilteroutput.push(FinalObject[i])
        }
    }
    // console.log('agefilteroutput')
    // console.log(agefilteroutput)
    
    // console.log('totaljson')
    // console.log(totaljson)

    
    let finaljson = totaljson;
    finaljson = finaljson.concat(totaljson);
    finaljson = Disabilityoutput.concat(Genderoutput);
    finaljson = finaljson.concat(agefilteroutput);
    // console.log('finaljson')
    // console.log(finaljson)
    
    const FinaljsonString = new Set(finaljson.map(JSON.stringify))
    const FinaljsonStringArray = Array.from(FinaljsonString)
     const FinaljsonObject = FinaljsonStringArray.map(JSON.parse)
     console.log('FinaljsonObject')
     console.log(FinaljsonObject)
     res.status(201).send(FinaljsonObject)
 
} }

    res.status(201).send('DEFAULT RETURN')
})

module.exports = router
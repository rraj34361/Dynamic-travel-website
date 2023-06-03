const express = require('express')
const slider = require('../models/sliderModel')
const detail = require('./../models/detailsModel')
const service = require('../models/service')
const routes = express.Router()
const contactModel = require('./../models/contactModel')


routes.get('/',async (req,res)=>{
    const details = await detail.findOne({"_id":"64564bbd01cd74cc6ae8d28d"})
    const slides = await slider.find()

    // console.log(details)
    // console.log(slides)
    const services = await service.find()
    res.render('index',{
        details:details,
        slides:slides,
        services : services
    })
})




// routes.get('/home',(req,res)=>{
//     res.render('index')
// })



routes.get('/gallery',async (req,res)=>{
    const details = await detail.findOne({"_id":"64564bbd01cd74cc6ae8d28d"})
    res.render('gallery',{
        details:details
    })
})


  /// process-contact-form
routes.post('/process-contact-form',async (req,res)=>{
    console.log("form is submited")
    console.log(req.body)



    //save the data to db
    try{
     const data = await contactModel.create(req.body)
     console.log(data)
     res.redirect('/')


    }catch(e)
    {
        console.log(e)
        res.redirect('/')
    }
})


module.exports = routes
const express = require("express")
const hbs = require('hbs')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const {Mongo_URL} = process.env
const routes =  require('./routes/main')
const detail = require('./models/detailsModel')
const slider = require('./models/sliderModel')
const service = require('./models/service')
const bodyparser = require("body-parser")
//static/css/style.css

app.use(bodyparser.urlencoded({
    extended:true}))


app.use("/static",express.static("public"))


app.use('',routes)


//(template engine)

app.set("view engine", "hbs")
app.set("views","views")

hbs.registerPartials("views/partials")

//db connection
mongoose.connect(Mongo_URL)
// newurlParser = true)
.then(()=>{
    console.log("mongodb connected")
}).catch((err)=>{console.log(err)})
  
// service.create({
//     icon:"fa-solid fa-truck",
//     title:"Provide Best Courses",
//     description:"We provide courses that help our student in learning and in placement.",
//     link: "https://www.google.com",
//     linkText:"Check"
// },
// {
//     icon:"fa-solid fa-shield-halved",
//     title:"Provide Best Courses",
//     description:"We provide courses that help our student in learning and in placement.",
//     link: "https://www.google.com",
//     linkText:"Check"
// },
// {
//     icon:"fa-solid fa-shield-halved",
//     title:"Provide Best Courses",
//     description:"We provide courses that help our student in learning and in placement.",
//     link: "https://www.google.com",
//     linkText:"Check"
// }

// )

// slider.create([
//     {
//         title : "Learn JavaScript it is easy to learn.",
//         subTitle: "JavaScript is one of the popular language.",
//         imageUrl : "/static/images/beach.jpg"
//     },
//     {
//         title : "lets go to see the sea .",
//         subTitle: "Beautiful to relaxing for holidys.",
//         imageUrl : "/static/images/freefall.jpg"
//     },
//     {
//         title : "Learn JavaScript it is easy to learn.",
//         subTitle: "JavaScript is one of the popular language.",
//         imageUrl : "/static/images/waterfall.jpg"
//     },
// ])


// detail.create({
//     brandName : "Info Technical Solution",
//     brandIconUrl : '',
//     links :[
//         {
//             label : "Home",
//             url : "/"
//         },
//         {
//             label : "Services",
//             url : "/services"
//         },
//         {
//             label: "Gallery",
//             url : "/gallery"
//         },
//         {
//             label: "About",
//             url : "/about"
//         },
//         {
//             label: "Contact Us",
//             url : "/contactus"
//         },

//     ]
// })





app.listen(process.env.PORT || 5500,()=>{
    console.log("server started")
})

const express = require("express");
// const { getCurrentInvoke } = require('@vendia/serverless-express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()

app.use('/', router)
router.use(bodyParser.json())
// router.use(bodyParser.urlencoded({ extended: true }))

// no need for any of this, can run locally with app.local.js
// const port = 3000
// app.listen(port, () => {  });
// console.log(`Server running on port ${port}`);


router.get('/', ((req, res) => {
    res.json({test : 'Workkkkkkk sadfgdsag'})
} ))
// router.get('/', (req, res) => {
//     const currentInvoke = getCurrentInvoke()
//     const { event = {} } = currentInvoke
//     const {
//         requestContext = {}
//     } = event
//     const {
//         domainName = 'localhost:3000'
//     } = requestContext
//     const apiUrl = `https://${domainName}`
//     res.render('PLzzzzzzz work dfghdfghdfzh', {
//         apiUrl
//     })
// })



module.exports = app
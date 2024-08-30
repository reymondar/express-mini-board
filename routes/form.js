const express = require("express")
const { v4 : uuidv4 } = require("uuid")

module.exports = form = (messages) => {
   const router = express.Router()
   
   router.get("/",(req,res) => {
      res.render("form")
   })
   
   router.post("/",(req, res) => {
      let {name, message} = req.body
      
      messages.push({text: name, user: message, added: new Date(),id: uuidv4()})
      res.redirect("/")
   })
   return router
}
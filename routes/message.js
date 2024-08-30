const express = require("express")


module.exports = messageIdRoute =  (messages) => {

   const router = express.Router()
   
   router.get('/', (req,res) => {
      res.render("index", {
         contentView: "all",
         params: messages
      })
   })

   router.get("/:messageID",( req, res) => {
      const { messageID } = req.params
      
      const message = messages.find(message => message.id == messageID)
      
      res.render("index", {
         contentView: "message",
         params: { message : message}
      })
   })

   return router
}

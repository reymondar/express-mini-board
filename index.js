const express = require("express")
const path = require("node:path")
const app = express()
const form = require("./routes/form")
const { v4: uuidv4 } = require("uuid")
const messageIdRoute = require("./routes/message")


app.set("views", path.join(__dirname,"views"))
app.set("view engine", "ejs")

app.use(express.urlencoded({extended: true}))

const messages = [
   {
      text: "Hi there!",
      user: "Amado",
      added: new Date(),
      id: 1
   },
   {
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
      id: 2
   }
]


app.get("/", (req, res) => {
   res.render("index", { contentView: "all",  params: messages }) 
   console.log('server running')
})


app.use("/new", form(messages) ) 

app.use("/messages", messageIdRoute(messages) )

const PORT = 8080
 
app.listen(PORT) 


module.exports = messages
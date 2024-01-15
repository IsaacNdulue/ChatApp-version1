const express=require('express')
const http=require('http');
const socket=require("socket.io")
const port=2000
const app = express()
const server=http.createServer(app)
const io=socket(server)
// const cors = require('cors')

app.set("view engine","ejs")
// app.use(cors())

app.get("/",(req,res)=>{

    res.render("homepage")
})

io.on("connection",(socket)=>{

   socket.on("message",(data)=>{
    socket.broadcast.emit("message",data)
    io.emit("message",data)

   });
});



server.listen(port,()=>{

console.log(`server is running on ${port}`)
})
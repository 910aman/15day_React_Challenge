const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoutes")
const chatRoute = require("./Routes/chatRoutes")
const messageRoute = require("./Routes/messageRoute")

const app = express();
require("dotenv").config()

app.use(express.json())
app.use(cors())
app.use("/api/users", userRoute)
app.use("/api/chats",chatRoute)
app.use("/api/messages",messageRoute)

app.get("/", (req, res) => {
    res.send("Welcome to our chat WebApp")
})

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URL;

app.listen(port, (req, res) => console.log("Server Running on port ", port,))

mongoose.connect(uri)
    .then(() => console.log("MongoDB Connection",))
    .catch((error) => console.log("Mongo DB COnnection failed", error.message))
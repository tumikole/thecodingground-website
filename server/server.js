const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv/config")

mongoose.connect(process.env.MONGO_URI,()=> console.log("DB is connected..."))
const port = 5000

app.listen(port, ()=> console.log(`Server is running on port 5000...`))
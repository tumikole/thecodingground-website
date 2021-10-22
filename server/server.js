const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");
//imports Routes
const postRoutes = require("./routes/applicant");
//Routes


mongoose.connect(process.env.MONGO_URI,() => {
    console.log("DB is connected...")
})
app.use(postRoutes)
const port = 5000

app.listen(port, ()=> console.log(`Server is running on port 5000...`))
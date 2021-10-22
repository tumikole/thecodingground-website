const mongoose = require('mongoose');
const Schema = mongoose.Schema

const applicantSchema = new Schema({
    name: {
        type: String, 
        required: true 
    },
    surname: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    contact_No:{
        type: Number, 
        required: true 
    },

    date:{
        type: Date, 
        default: Date.now
    }


})

const Applicant = mongoose.model("Applicant", applicantSchema)
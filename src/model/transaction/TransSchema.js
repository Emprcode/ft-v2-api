import mongoose from 'mongoose'

const TransSchema = new mongoose.Schema({
     
    name:{
        type: String,
        required: true
    },
    amount:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    userId:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        // requred: true
    },
}, {timestamps: true}) 


export default mongoose.model("Transaction", TransSchema)
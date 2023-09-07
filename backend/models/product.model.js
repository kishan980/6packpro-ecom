const mongoose =require("mongoose")

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter the product name"]
    },
    description:{
        type:String,
        required:[true, "please enter the product description"]
    },
    price:{
        type:Number,
        required:[true, "please enter the product price"],
        maxLength:[8,"price connot exceed 8 charachaters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true, "please enter the product category"]
    },
    Stock:{
        type:Number,
        required:[true, "please enter the product stock"],
        maxLength:[4, "Stock connot exceed 4 charachaters"],
        default:1
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Product",productSchema)